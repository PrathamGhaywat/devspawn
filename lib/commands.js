import fs from 'fs'
import os from 'os'
import path from 'path'
import { execSync  } from 'child_process'
import chalk from 'chalk'

const CONFIG_PATH = path.join(os.homedir(), '.devspawnrc.json')

function loadConfig() {
    if (!fs.existsSync(CONFIG_PATH)) return{}
    return JSON.parse(fs.readFileSync(CONFIG_PATH))
}

function saveConfig(data) {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(data, null, 2))
}

export function addShortcut(name, cmds) {
    const config = loadConfig()
    config[name] = cmds
    saveConfig(config);
    console.log(chalk.green(`Shortcut "${name}" added`))
}

export function runShortcut(name, arg = ' ') {
    const config = loadConfig()
    const cmds = config[name]
    if (!cmds) {
        console.error(chalk.red(`No shortcut named "${name}" found`))
        return
    }
    console.log(chalk.cyan(`Running shortcut "${name}"...`))
    cmds.forEach((cmd, i) =>{
    const finalCmd = cmd.replace('{projectName}', arg)
    console.log(chalk.yellow(`> ${finalCmd}`))
    try {
        execSync(finalCmd, { stdio: 'inherit', shell: true})
    } catch(err) {
        console.error(chalk.red(`Command failed: ${finalCmd}`))
        process.exit(1)
    }
})
}

export function listShortcuts(){
    const config = loadConfig()
    const keys = Object.keys(config)
    if  (keys.length === 0) {
        console.log(chalk.gray('No shortcuts saved'))
        return
    }

    console.log(chalk.magenta('Saved Shortcuts'))
    keys.forEach(k => {
        console.log(chalk.green(`- ${k}`))
    })
}
