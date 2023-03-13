# frontend-sandbox

This repository is thinceller's Front-end sandbox.

## Development

### Prerequisites

There are several requirements for setting up this repository.

#### Node.js

This repository uses the `.node-version` file for Node.js versioning, so you need to use a tool that supports this file format, such as:

- [nodenv](https://github.com/nodenv/nodenv)
- [asdf](https://asdf-vm.com/)

#### pnpm

In this repository, we basically use [pnpm](https://pnpm.io/) as the package manager. In order to manage the version of pnpm, you can use [Corepack](https://github.com/nodejs/corepack).

```sh
cd path/to/repository
corepack enable
```

### Setting up

```sh
cd path/to/repository
pnpm i
```

### Running packages

```sh
cd packages/<packageName>
pnpm start
# or
pnpm -F <packageName> start
```
