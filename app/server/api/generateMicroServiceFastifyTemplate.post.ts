import { join } from 'path'
import archiver from 'archiver'
import { nanoid } from 'nanoid' // To create a zip file
import fs from 'fs-extra' // To help with folder copying
export default defineEventHandler(async event => {
  const body = await readBody(event)

  let projectName = body.projectName || 'Default Project Name'

  let projectNameNonFormatted = body.projectName || 'Default Project Name'

  // Replace spaces with hyphens
  projectName = projectName.replace(/\s+/g, '-').toLowerCase()

  const projectEnvVariables = generateProjectEnvVariables(projectName)

  const originalFolderPath = join(
    process.cwd(),
    'private-storage',
    'fastify-microservice-template'
  ) // Path to your private folder

  const tempFolderId = nanoid() // Generate a unique temporary folder ID

  const tempFolderPath = join(
    process.cwd(),
    'private-storage',
    `${tempFolderId}`
  )

  // Copy the original folder to the temp folder
  await fs.copy(originalFolderPath, tempFolderPath)

  await populateDockerDotEnvVariables(tempFolderPath, projectEnvVariables)

  await populateEnvLocalVariables(tempFolderPath, projectEnvVariables)

  await populateDockerComposeVariables(
    tempFolderPath,
    projectEnvVariables
  )

  // Create an archive (zip) in memory
  const archive = archiver('zip', {
    zlib: { level: 9 } // Compression level
  })

  // Respond with the zip file to the client
  const res = event.node.res
  res.setHeader(
    'Content-Disposition',
    `attachment; filename="${projectName}.zip"`
  )
  res.setHeader('Content-Type', 'application/zip')

  // Pipe the zip archive to the response
  archive.pipe(res)

  // Append all files from the folder to the archive
  archive.directory(tempFolderPath, false)

  // Finalize the zip file (complete the stream)
  await archive.finalize()

  // Delete the folder after the download is complete
  // Use the `res.on('finish')` event to ensure that the response is done
  res.on('finish', () => {
    fs.remove(tempFolderPath, (err: Error) => {
      if (err) {
        console.error(`Error deleting folder: ${err}`)
      } else {
        console.log(`Successfully deleted folder: ${tempFolderPath}`)
      }
    })
  })
})

const generateProjectEnvVariables = (projectName: string) => {
  return {
    webserverContainerName: `${projectName}-webserver`,
    databaseContainerName: `${projectName}-db`,
    databaseName: `${projectName.replace(/-/g, '_')}`,
    databaseDumpFile: `${projectName}-dump`,
    jwtSecret: generateJWTSecret(64)
  }
}

const populateDockerDotEnvVariables = async (
  tempFolderPath: string,
  projectEnvVariables
) => {
  // Path to the docker-compose.yml inside the copied folder
  const dockerDotEnvFilePath = join(tempFolderPath, '.env.docker')

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dockerDotEnvFilePath)) {
    // Read the content of docker-compose.yml
    let dockerDotEnvContent = await fs.readFile(dockerDotEnvFilePath, 'utf8')

    // Replace the placeholders with user inputs
    dockerDotEnvContent = dockerDotEnvContent.replace(
      /{{webserverContainerName}}/g,
      projectEnvVariables.webserverContainerName
    )

    dockerDotEnvContent = dockerDotEnvContent.replace(
      /{{databaseContainerName}}/g,
      projectEnvVariables.databaseContainerName
    )

    dockerDotEnvContent = dockerDotEnvContent.replace(
      /{{databaseName}}/g,
      projectEnvVariables.databaseName
    )

    dockerDotEnvContent = dockerDotEnvContent.replace(
      /{{databaseDumpFile}}/g,
      projectEnvVariables.databaseDumpFile
    )
    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dockerDotEnvFilePath, dockerDotEnvContent, 'utf8')
  }
}

const populateEnvLocalVariables = async (
  tempFolderPath: string,
  projectEnvVariables
) => {
  const dotEnvLocalFilePath = join(tempFolderPath, '.env.local')

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dotEnvLocalFilePath)) {
    // Read the content of docker-compose.yml
    let dotEnvLocalContent = await fs.readFile(dotEnvLocalFilePath, 'utf8')

    // Replace the placeholders with user inputs
    dotEnvLocalContent = dotEnvLocalContent.replace(
      /{{databaseName}}/g,
      projectEnvVariables.databaseName
    )

    dotEnvLocalContent = dotEnvLocalContent.replace(
        /{{jwtSecret}}/g,
        projectEnvVariables.jwtSecret
    )
    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dotEnvLocalFilePath, dotEnvLocalContent, 'utf8')

    // Create a new file and write the modified content into it
    const mainDotEnvFile = join(tempFolderPath, 'src', '.env')
    await fs.writeFile(mainDotEnvFile, dotEnvLocalContent, 'utf8')
  }
}

const populateDockerComposeVariables = async (
  tempFolderPath: string,
  projectEnvVariables
) => {
  const dockerComposeFilePath = join(tempFolderPath, 'docker-compose.yaml')

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dockerComposeFilePath)) {
    // Read the content of docker-compose.yml
    let dockerComposeContent = await fs.readFile(dockerComposeFilePath, 'utf8')

    // Replace the placeholders with user inputs
    dockerComposeContent = dockerComposeContent.replace(
      /{{databaseContainerName}}/g,
      projectEnvVariables.databaseContainerName
    )

    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dockerComposeFilePath, dockerComposeContent, 'utf8')
  }
}

const generateJWTSecret = (n:number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < n; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

