# ⚡ devspawn

> Personal shortcut launcher for your development setups  
> Define once, run anytime — instantly spin up new projects with your favorite tools


## What is it?

`devspawn` is a CLI tool that lets you define named shortcuts for running a series of terminal commands. Think of it like custom project templates or shell macros, but way simpler and specific to your dev workflow.

##  Example Use Case

Let’s say you always start a new project like this:

```bash
npx create-next-app@latest
cd my-app
npm install lucide-react
````

With `devspawn`, you can save that setup once:

```bash
devspawn add next-lucide "npx create-next-app@latest {projectName}" "cd {projectName}" "npm install lucide-react"
```

And next time, just run:

```bash
devspawn run next-lucide my-awesome-app
```

Done.

---

## 📦 Installation
Via NPM:
```bash
npm install -g devspawn
```

Clone locally:

```bash
git clone https://github.com/PrathamGhaywat/devspawn.git
cd devspawn
npm install
npm link
```

Now the `devspawn` CLI is available globally.

---

## Commands

### Add a new shortcut

```bash
devspawn add <name> "<cmd1>" "<cmd2>" ...
```

* Example:

```bash
devspawn add vite-react "npm create vite@latest {projectName}" "cd {projectName}" "npm install"
```

### Run a shortcut

```bash
devspawn run <name> [arg]
```

* `{projectName}` is replaced with `[arg]`.

Example:

```bash
devspawn run vite-react my-app
```


### List all saved shortcuts

```bash
devspawn list
```

---

## Shortcut Templates

You can use **`{projectName}`** as a placeholder that gets replaced when running:

```bash
devspawn add node-basic "mkdir {projectName}" "cd {projectName}" "npm init -y"
devspawn run node-basic my-cli-app
```

---

## Where Data is Stored

All shortcuts are saved in:

```
~/.devspawnrc.json
```

You can edit the file if needed to

---

##  Why Use This?

* Speeds up bootstrapping projects
*  Keeps terminal workflows clean and repeatable
* Replaces one-off bash scripts or Notion snippets
* Easy to customize and extend
