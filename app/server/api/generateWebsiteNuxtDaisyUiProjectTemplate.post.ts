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

  const frontendEnvVariables = generateFrontendEnvVariables(projectName)

  const originalFolderPath = join(
    process.cwd(),
    'private-storage',
    'nuxt-and-daisyui-website-template'
  ) // Path to your private folder

  const tempFolderId = nanoid() // Generate a unique temporary folder ID

  const tempFolderPath = join(
    process.cwd(),
    'private-storage',
    `${tempFolderId}`
  )

  // Copy the original folder to the temp folder
  await fs.copy(originalFolderPath, tempFolderPath)

  await populateFrontEndDockerDotEnvVariables(
    tempFolderPath,
    frontendEnvVariables
  )

  await populateFrontendEnvLocalVariables(tempFolderPath, projectName)

  await populateFrontendDockerComposeVariables(
    tempFolderPath,
    frontendEnvVariables
  )

  await populateFrontendWebsiteIndexName(
    tempFolderPath,
    projectNameNonFormatted
  )

  // await renameSpecificFolders(tempFolderPath, projectName);

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

const generateFrontendEnvVariables = (projectName: string) => {
  return {
    appContainerName: `${projectName}-website`
  }
}

const populateFrontEndDockerDotEnvVariables = async (
  tempFolderPath: string,
  frontendEnvVariables
) => {
  // Path to the docker-compose.yml inside the copied folder
  const dockerDotEnvFilePath = join(tempFolderPath, '.env.docker')

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dockerDotEnvFilePath)) {
    // Read the content of docker-compose.yml
    let dockerDotEnvContent = await fs.readFile(dockerDotEnvFilePath, 'utf8')

    // Replace the placeholders with user inputs
    dockerDotEnvContent = dockerDotEnvContent.replace(
      /{{nodeContainerName}}/g,
      frontendEnvVariables.appContainerName
    )

    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dockerDotEnvFilePath, dockerDotEnvContent, 'utf8')
  }
}

const populateFrontendEnvLocalVariables = async (
  tempFolderPath: string,
  projectName: string
) => {
  const dotEnvLocalFilePath = join(tempFolderPath, '.env.local')

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dotEnvLocalFilePath)) {
    // Read the content of docker-compose.yml
    let dotEnvLocalContent = await fs.readFile(dotEnvLocalFilePath, 'utf8')

    // Replace the placeholders with user inputs
    dotEnvLocalContent = dotEnvLocalContent.replace(
      /{{applicationName}}/g,
      projectName
    )

    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dotEnvLocalFilePath, dotEnvLocalContent, 'utf8')

    // Create a new file and write the modified content into it
    const mainDotEnvFile = join(tempFolderPath, 'app', '.env')
    await fs.writeFile(mainDotEnvFile, dotEnvLocalContent, 'utf8')
  }
}

const populateFrontendDockerComposeVariables = async (
  tempFolderPath: string,
  frontendEnvVariables
) => {
  const dockerComposeFilePath = join(tempFolderPath, 'docker-compose.yaml')

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(dockerComposeFilePath)) {
    // Read the content of docker-compose.yml
    let dockerComposeContent = await fs.readFile(dockerComposeFilePath, 'utf8')

    // Replace the placeholders with user inputs
    dockerComposeContent = dockerComposeContent.replace(
      /{{webserverContainerName}}/g,
      frontendEnvVariables.appContainerName
    )

    // Write the modified content back to docker-compose.yml
    await fs.writeFile(dockerComposeFilePath, dockerComposeContent, 'utf8')
  }
}

const populateFrontendWebsiteIndexName = async (
  tempFolderPath: string,
  projectName: string
) => {
  const baseHeaderFilePath = join(
    tempFolderPath,
    'app',
    'components',
    'BaseHeader.vue'
  )

  // Check if docker-compose.yml exists and modify it
  if (await fs.pathExists(baseHeaderFilePath)) {
    // Read the content of docker-compose.yml
    let baseHeaderContent = await fs.readFile(baseHeaderFilePath, 'utf8')

    // Replace the placeholders with user inputs
    baseHeaderContent = baseHeaderContent.replace(
      /{{websiteName}}/g,
      projectName
    )

    // Write the modified content back to docker-compose.yml
    await fs.writeFile(baseHeaderFilePath, baseHeaderContent, 'utf8')
  }
}
