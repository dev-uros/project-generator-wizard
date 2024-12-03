import {join} from "path";
import archiver from 'archiver';
import {nanoid} from "nanoid"; // To create a zip file
import fs from 'fs-extra'; // To help with folder copying
export default defineEventHandler(async (event) => {


  const body = await readBody(event);


  let projectName = body.projectName || 'Default Project Name';

  // Replace spaces with hyphens
  projectName = projectName.replace(/\s+/g, '-').toLowerCase();

  const documentationEnvVariables = generateDocumentationEnvVariables(projectName);


  const originalFolderPath = join(process.cwd(), 'private-storage', 'vitepress-standalone-documentation'); // Path to your private folder

  const tempFolderId = nanoid(); // Generate a unique temporary folder ID

  const tempFolderPath = join(process.cwd(), 'private-storage', `${tempFolderId}`);


  // Copy the original folder to the temp folder
  await fs.copy(originalFolderPath, tempFolderPath);

  await populateDocumentationDockerDotEnvVariables(tempFolderPath, documentationEnvVariables);

  await populateDocumentationDockerComposeVariables(tempFolderPath, documentationEnvVariables)

  await populateDocumentationIndexVariables(tempFolderPath, documentationEnvVariables)
  //
  await populateDocumentationConfigVariables(tempFolderPath, documentationEnvVariables)

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

const generateDocumentationEnvVariables = (projectName: string) => {
  return {
    documentationContainerName: `${projectName}-documentation`,
    projectName: `${projectName}`
  }
}


const populateDocumentationDockerDotEnvVariables = async (tempFolderPath: string, documentationEnvVariables) => {
  // Path to the docker-compose.yml inside the copied folder
  const dockerDotEnvFilePath = join(tempFolderPath, '.env.docker');

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

const populateDocumentationDockerComposeVariables = async (tempFolderPath: string, documentationEnvVariables) => {
  const dockerComposeFilePath = join(tempFolderPath, 'docker-compose.yml');

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
  const indexMdFilePath = join(tempFolderPath, 'app', 'docs', 'index.md');

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
  const configFilePath = join(tempFolderPath, 'app', 'docs', '.vitepress', 'config.mts');

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