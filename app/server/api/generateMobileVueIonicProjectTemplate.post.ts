import {join} from 'path'
import archiver from 'archiver'
import {nanoid} from 'nanoid' // To create a zip file
import fs from 'fs-extra' // To help with folder copying
export default defineEventHandler(async event => {
    const body = await readBody(event)

    let projectName = body.projectName || 'Default Project Name'

    let projectNameNonFormatted = body.projectName || 'Default Project Name'

    let appId = body.appId;

    // Replace spaces with hyphens
    projectName = projectName.replace(/\s+/g, '-').toLowerCase()

    const frontendEnvVariables = generateFrontendEnvVariables(projectName)

    const originalFolderPath = join(
        process.cwd(),
        'private-storage',
        'ionic-vue-mobile-template'
    ) // Path to your private folder

    const tempFolderId = nanoid() // Generate a unique temporary folder ID

    const tempFolderPath = join(
        process.cwd(),
        'private-storage',
        `${tempFolderId}`
    )

    // Copy the original folder to the temp folder
    await fs.copy(originalFolderPath, tempFolderPath)

    await populateFrontendEnvLocalVariables(tempFolderPath, projectName)


    await populateIonicAndCapacitorConfig(
        tempFolderPath,
        projectNameNonFormatted,
        appId
    )


    // Create an archive (zip) in memory
    const archive = archiver('zip', {
        zlib: {level: 9} // Compression level
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

const populateFrontendEnvLocalVariables = async (
    tempFolderPath: string,
    projectName: string
) => {
    const dotEnvLocalFilePath = join(tempFolderPath, '.env.example')

    // Check if docker-compose.yml exists and modify it
    if (await fs.pathExists(dotEnvLocalFilePath)) {
        // Read the content of docker-compose.yml
        let dotEnvLocalContent = await fs.readFile(dotEnvLocalFilePath, 'utf8')


        // Write the modified content back to docker-compose.yml
        await fs.writeFile(dotEnvLocalFilePath, dotEnvLocalContent, 'utf8')

        // Create a new file and write the modified content into it
        const mainDotEnvFile = join(tempFolderPath, '.env')
        await fs.writeFile(mainDotEnvFile, dotEnvLocalContent, 'utf8')
    }
}


const populateIonicAndCapacitorConfig = async (
    tempFolderPath: string,
    projectName: string,
    appId: string
) => {
    const capacitorConfigPath = join(
        tempFolderPath,
        'capacitor.config.ts'
    )

    const ionicConfigPath = join(
        tempFolderPath,
        'ionic.config.json'
    )
    // Check if docker-compose.yml exists and modify it
    if (await fs.pathExists(capacitorConfigPath)) {
        // Read the content of docker-compose.yml
        let newCapacitorConfigContent = await fs.readFile(capacitorConfigPath, 'utf8')

        // Replace the placeholders with user inputs
        newCapacitorConfigContent = newCapacitorConfigContent.replace(
            /{{appId}}/g,
            appId
        )

        newCapacitorConfigContent = newCapacitorConfigContent.replace(
            /{{appName}}/g,
            projectName
        )

        // Write the modified content back to docker-compose.yml
        await fs.writeFile(capacitorConfigPath, newCapacitorConfigContent, 'utf8')
    }

    if (await fs.pathExists(ionicConfigPath)) {
        // Read the content of docker-compose.yml
        let newIonicConfigContent = await fs.readFile(ionicConfigPath, 'utf8')


        newIonicConfigContent = newIonicConfigContent.replace(
            /{{appName}}/g,
            projectName
        )
        // Write the modified content back to docker-compose.yml
        await fs.writeFile(ionicConfigPath, newIonicConfigContent, 'utf8')
    }


}
