#!/usr/bin/env node

//1st line is a shebang(for system to know that this is an cli thing)

import { program } from "commander";
import { addShortcut, runShortcut, listShortcuts, editShortcut, deleteShortcut } from '../lib/commands.js' 

program.command('add <name> [cmds...]').description('Add a new command chain').action(addShortcut)
program.command('run <name> [arg]').description('Run a shortcut by name').action(runShortcut)
program.command('list').description('List all saved shortcuts').action(listShortcuts)
program.command('edit <name> [cmds...').description('Edit a saved shortcut').action(editShortcut)
program.command('delete <name> ').description('Delete a shortcut').action(deleteShortcut)
program.parse(process.argv)
