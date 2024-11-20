import {join} from "path";
import archiver from 'archiver';
import {nanoid} from "nanoid"; // To create a zip file
import fs from 'fs-extra'; // To help with folder copying
export default defineEventHandler(async (event) => {


  const body = await readBody(event);


  let projectName = body.projectName || 'Default Project Name';

  // Replace spaces with hyphens
  projectName = projectName.replace(/\s+/g, '-').toLowerCase();

  const backendEnvVariables = generateBackendEnvVariables(projectName)

  const frontendEnvVariables = generateFrontendEnvVariables(projectName);

  const documentationEnvVariables = generateDocumentationEnvVariables(projectName);


  const originalFolderPath = join(process.cwd(), 'private-storage', 'laravel-and-vue-backoffice-template'); // Path to your private folder

  const tempFolderId = nanoid(); // Generate a unique temporary folder ID

  const tempFolderPath = join(process.cwd(), 'private-storage', `${tempFolderId}`);


  // Copy the original folder to the temp folder
  await fs.copy(originalFolderPath, tempFolderPath);

  await populateDockerDotEnvVariables(tempFolderPath, backendEnvVariables)

  await populateEnvLocalVariables(tempFolderPath, backendEnvVariables, projectName)

  await populateEnvLocalTestingVariables(tempFolderPath, backendEnvVariables, projectName)

  await populateDockerComposeVariables(tempFolderPath, backendEnvVariables)


  await populateFrontEndDockerDotEnvVariables(tempFolderPath, frontendEnvVariables);

  await populateFrontendEnvLocalVariables(tempFolderPath, projectName)

  await populateFrontendDockerComposeVariables(tempFolderPath, frontendEnvVariables)


  await populateDocumentationDockerDotEnvVariables(tempFolderPath, documentationEnvVariables);

  await populateDocumentationDockerComposeVariables(tempFolderPath, documentationEnvVariables)

  await populateDocumentationIndexVariables(tempFolderPath, documentationEnvVariables)
  //
  await populateDocumentationConfigVariables(tempFolderPath, documentationEnvVariables)


  await renameSpecificFolders(tempFolderPath, projectName);

  // Create an archive (zip) in memory
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Compression level
  });

  // Respond with the zip file to the client
  const res = event.node.res;
  res.setHeader('Content-Disposition', `attachment; filename="${projectName}.zip"`);
  res.setHeader('Content-Type', 'application/zip');

  // Pipe the zip archive to the response
  archive.pipe(res);

  // Append all files from the folder to the archive
  archive.directory(tempFolderPath, false);

  // Finalize the zip file (complete the stream)
  await archive.finalize();

  // Delete the folder after the download is complete
  // Use the `res.on('finish')` event to ensure that the response is done
  res.on('finish', () => {
    fs.remove(tempFolderPath, (err: Error) => {
      if (err) {
        console.error(`Error deleting folder: ${err}`);
      } else {
        console.log(`Successfully deleted folder: ${tempFolderPath}`);
      }
    });
  });
})

const renameSpecificFolders = async (folderPath: string, projectName: string) =>{
  // Define the subfolders to rename
  const foldersToRename = ['api-template', 'app-template', 'documentation-template'];

  for (const folderName of foldersToRename) {
    const oldPath = join(folderPath, folderName);

    if (await fs.pathExists(oldPath)) {
      if(folderName === 'api-template'){
        const newPath = join(folderPath, `${projectName}-api`);
        await fs.rename(oldPath, newPath);
      }else if(folderName === 'app-template'){
        const newPath = join(folderPath, `${projectName}-app`);
        await fs.rename(oldPath, newPath);
      }else{
        const newPath = join(folderPath, `${projectName}-documentation`);
        await fs.rename(oldPath, newPath);
      }

    }
  }
}

const generateBackendEnvVariables = (projectName: string) => {
  return {
    webserverContainerName: `${projectName}-api-webserver`,
    phpContainerName: `${projectName}-api-php`,
    dbContainerName: `${projectName}-db`,
    dbName: `${projectName.replace(/-/g, '_')}`,
    dbDumpFileName: `${projectName}-db-dump.sql`,
    dbTestContainerName: `${projectName}-db-test`,
    dbTestName: `${projectName.replace(/-/g, '_')}_test`
  }
}

const generateFrontendEnvVariables = (projectName: string) => {
  return {
    appContainerName: `${projectName}-app`,
  }
}

const generateDocumentationEnvVariables = (projectName: string) => {
  return {
    documentationContainerName: `${projectName}-documentation`,
    projectName: `${projectName}`
  }
}


const populateDockerDotEnvVariables = async (tempFolderPath: string, backendEnvVariables) => {
  // Path to the docker-compose.yml inside the copied folder
  const dockerDotEnvFilePath = join(tempFolderPath, 'api-template', '.env.docker');

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dockerDotEnvFilePath)) {
    // Read the content of docker-compose.yml
    let dockerDotEnvContent = await fs.readFile(dockerDotEnvFilePath, 'utf8');

    // Replace the placeholders with user inputs
    dockerDotEnvContent = dockerDotEnvContent
        .replace(/{{webserverContainerName}}/g, backendEnvVariables.webserverContainerName)
        .replace(/{{databaseContainerName}}/g, backendEnvVariables.dbContainerName)
        .replace(/{{phpContainerName}}/g, backendEnvVariables.phpContainerName)
        .replace(/{{databaseName}}/g, backendEnvVariables.dbName)
        .replace(/{{dumpFileName}}/g, backendEnvVariables.dbDumpFileName)
        .replace(/{{databaseTestContainerName}}/g, backendEnvVariables.dbTestContainerName)
        .replace(/{{databaseTestName}}/g, backendEnvVariables.dbTestName)


    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dockerDotEnvFilePath, dockerDotEnvContent, 'utf8');
  }
}

const populateFrontEndDockerDotEnvVariables = async (tempFolderPath: string, frontendEnvVariables) => {
  // Path to the docker-compose.yml inside the copied folder
  const dockerDotEnvFilePath = join(tempFolderPath, 'app-template', '.env.docker');

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dockerDotEnvFilePath)) {
    // Read the content of docker-compose.yml
    let dockerDotEnvContent = await fs.readFile(dockerDotEnvFilePath, 'utf8');

    // Replace the placeholders with user inputs
    dockerDotEnvContent = dockerDotEnvContent
        .replace(/{{nodeContainerName}}/g, frontendEnvVariables.appContainerName)


    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dockerDotEnvFilePath, dockerDotEnvContent, 'utf8');
  }
}

const populateDocumentationDockerDotEnvVariables = async (tempFolderPath: string, documentationEnvVariables) => {
  // Path to the docker-compose.yml inside the copied folder
  const dockerDotEnvFilePath = join(tempFolderPath, 'documentation-template', '.env.docker');

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dockerDotEnvFilePath)) {
    // Read the content of docker-compose.yml
    let dockerDotEnvContent = await fs.readFile(dockerDotEnvFilePath, 'utf8');

    // Replace the placeholders with user inputs
    dockerDotEnvContent = dockerDotEnvContent
        .replace(/{{documentationContainerName}}/g, documentationEnvVariables.documentationContainerName)


    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dockerDotEnvFilePath, dockerDotEnvContent, 'utf8');
  }
}


const populateEnvLocalVariables = async (tempFolderPath: string, backendEnvVariables, projectName: string)=>{
  const dotEnvLocalFilePath = join(tempFolderPath, 'api-template', '.env.local');

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dotEnvLocalFilePath)) {
    // Read the content of docker-compose.yml
    let dotEnvLocalContent = await fs.readFile(dotEnvLocalFilePath, 'utf8');

    // Replace the placeholders with user inputs
    dotEnvLocalContent = dotEnvLocalContent
        .replace(/{{applicationName}}/g, projectName)
        .replace(/{{databaseName}}/g, backendEnvVariables.dbName)


    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dotEnvLocalFilePath, dotEnvLocalContent, 'utf8');

    // Create a new file and write the modified content into it
    const mainDotEnvFile = join(tempFolderPath, 'api-template', 'src', '.env');
    await fs.writeFile(mainDotEnvFile, dotEnvLocalContent, 'utf8');

  }
}

const populateFrontendEnvLocalVariables = async (tempFolderPath: string, projectName: string) => {
  const dotEnvLocalFilePath = join(tempFolderPath, 'app-template', '.env.local');

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dotEnvLocalFilePath)) {
    // Read the content of docker-compose.yml
    let dotEnvLocalContent = await fs.readFile(dotEnvLocalFilePath, 'utf8');

    // Replace the placeholders with user inputs
    dotEnvLocalContent = dotEnvLocalContent
        .replace(/{{applicationName}}/g, projectName)


    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dotEnvLocalFilePath, dotEnvLocalContent, 'utf8');

    // Create a new file and write the modified content into it
    const mainDotEnvFile = join(tempFolderPath, 'app-template', 'app', '.env');
    await fs.writeFile(mainDotEnvFile, dotEnvLocalContent, 'utf8');

  }
}


const populateEnvLocalTestingVariables = async (tempFolderPath: string, backendEnvVariables, projectName: string) => {
  const dotEnvLocalTestingFilePath = join(tempFolderPath, 'api-template', '.env.local.testing');

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dotEnvLocalTestingFilePath)) {
    // Read the content of docker-compose.yml
    let dotEnvLocalTestingContent = await fs.readFile(dotEnvLocalTestingFilePath, 'utf8');

    // Replace the placeholders with user inputs
    dotEnvLocalTestingContent = dotEnvLocalTestingContent
        .replace(/{{applicationName}}/g, projectName)
        .replace(/{{databaseName}}/g, backendEnvVariables.dbTestName)


    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dotEnvLocalTestingFilePath, dotEnvLocalTestingContent, 'utf8');

    // Create a new file and write the modified content into it
    const mainDotEnvTestingFile = join(tempFolderPath, 'api-template', 'src', '.env.testing');
    await fs.writeFile(mainDotEnvTestingFile, dotEnvLocalTestingContent, 'utf8');
  }
}


const populateDockerComposeVariables = async (tempFolderPath: string, backendEnvVariables) => {
  const dockerComposeFilePath = join(tempFolderPath, 'api-template', 'docker-compose.yml');

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dockerComposeFilePath)) {
    // Read the content of docker-compose.yml
    let dockerComposeContent = await fs.readFile(dockerComposeFilePath, 'utf8');

    // Replace the placeholders with user inputs
    dockerComposeContent = dockerComposeContent
        .replace(/{{databaseVolumeName}}/g, backendEnvVariables.dbName)
        .replace(/{{databaseTestVolumeName}}/g, backendEnvVariables.dbTestName)


    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dockerComposeFilePath, dockerComposeContent, 'utf8');
  }
}

const populateFrontendDockerComposeVariables = async (tempFolderPath: string, frontendEnvVariables) => {
  const dockerComposeFilePath = join(tempFolderPath, 'app-template', 'docker-compose.yaml');

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dockerComposeFilePath)) {
    // Read the content of docker-compose.yml
    let dockerComposeContent = await fs.readFile(dockerComposeFilePath, 'utf8');

    // Replace the placeholders with user inputs
    dockerComposeContent = dockerComposeContent
        .replace(/{{webserverContainerName}}/g, frontendEnvVariables.appContainerName)


    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dockerComposeFilePath, dockerComposeContent, 'utf8');
  }
}

const populateDocumentationDockerComposeVariables = async (tempFolderPath: string, documentationEnvVariables) => {
  const dockerComposeFilePath = join(tempFolderPath, 'documentation-template', 'docker-compose.yml');

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dockerComposeFilePath)) {
    // Read the content of docker-compose.yml
    let dockerComposeContent = await fs.readFile(dockerComposeFilePath, 'utf8');

    // Replace the placeholders with user inputs
    dockerComposeContent = dockerComposeContent
        .replace(/{{documentationContainerName}}/g, documentationEnvVariables.documentationContainerName)


    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dockerComposeFilePath, dockerComposeContent, 'utf8');
  }
}

const populateDocumentationIndexVariables = async (tempFolderPath: string, documentationEnvVariables) => {
  const indexMdFilePath = join(tempFolderPath, 'documentation-template', 'app', 'docs', 'index.md');

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(indexMdFilePath)) {
    // Read the content of docker-compose.yml
    let indexMdContent = await fs.readFile(indexMdFilePath, 'utf8');

    // Replace the placeholders with user inputs
    indexMdContent = indexMdContent
        .replace(/{{projectName}}/g, documentationEnvVariables.projectName)


    // Write the modified content back to docker-compose.yml
    await fs.writeFile(indexMdFilePath, indexMdContent, 'utf8');
  }
}

const populateDocumentationConfigVariables = async (tempFolderPath: string, documentationEnvVariables) => {
  const configFilePath = join(tempFolderPath, 'documentation-template', 'app', 'docs', '.vitepress', 'config.mts');

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(configFilePath)) {
    // Read the content of docker-compose.yml
    let configContent = await fs.readFile(configFilePath, 'utf8');

    // Replace the placeholders with user inputs
    configContent = configContent
        .replace(/{{projectName}}/g, documentationEnvVariables.projectName)


    // Write the modified content back to docker-compose.yml
    await fs.writeFile(configFilePath, configContent, 'utf8');
  }
}