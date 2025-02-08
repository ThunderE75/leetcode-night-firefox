/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process')
const { platform } = require('os')

const execWithStdio = (command) => execSync(command, { stdio: 'inherit' })

async function removeUnnecessaryAssets() {
  try {
    if (platform() === 'win32') {
      execWithStdio('del /F /Q dist\\assets\\*.svg') // Windows command
    } else {
      execWithStdio('rm -f dist/assets/*.svg') // Linux/macOS command
    }
    console.log('✅ Removed all `dist/assets/*.svg` successfully!')
  } catch (error) {
    console.error('❌ Error removing assets:', error.message)
  }
}

removeUnnecessaryAssets()
