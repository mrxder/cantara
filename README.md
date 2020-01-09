## General

In this document, the word `App` can refer to React Apps or Node-Apps.

### Naming your apps

The name of your app is derived from the folder name it lives in. App names must be unique within the same repository.

## Commands

```bash
ctr dev <appname>
```

```bash
ctr build <appname>
```

```bash
# Runs an arbitrary command within the scope of the specified package. This can be a globally valid CLI command (e.g. 'npm', 'cd', 'echo'), a tool you installed via NPM or a tool which is used internally by Cantara (e.g. serverless).
ctr run <appname|package-name> <command> [...args]
```

--> Implement this by adding all of the above mentioned folders to the PATH of the current session

```bash
ctr test [appname|package-name] [...jestArgs]
```

```bash
ctr new <new-name> <react|node|serverless|js-package|react-component>
```

```bash
ctr init [template-name]
```

# Things to keep in mind

## Required

- Make building and deploying work!
- Handle env vars conveniently
- CSS Modules (xyz.module.css)
- What about different stages?
- Implement "test" command
- Custom e2e testing command can be provided. Cantara takes care of starting all the neccessary servers.
- NPM commands can be executed from the top level folder for each package

  - Provide good UX, e.g. instead of typing out "cantara <appname> install express" provide a dropdown list --> Do all of that stuff in the "cockpit" mode

- Provide "publish" command with good UX for publishing a package to NPM
- Deployment should work out of the box for all parts an application can have
  - Defaults can be overriden
- "CI" command
  - Only rebuilds and deploys the parts of the application that changed

## Nice to have

- Interactive mode, "Cockpit", where multiple Cantara commands can be started and monitored
- Add bundleanalyzer option to build cmd
- Replace Nodemon with custom Chokidar implementation
- Maybe install actual scripts as own package?
- When new version is available, show message.
- corejs?
- Warn when required files (e.g. index.js/index.tsx) are missing
- Add greenkeeper
- Add bundle analyzer (react apps and packages only)
- Faster build times
  - https://github.com/amireh/happypack
