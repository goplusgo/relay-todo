# A todo App using React Reley
## Project Setup

### 1. Create React App using Yarn
```
yarn create react-app relay-todo
```

### 2. Add Flow static type checker

**2.1 Setup Compiler**
```
yarn add --dev @babel/core @babel/cli @babel/preset-flow
```
Create a `.babelrc` file and add:
```json
{
  "presets": ["@babel/preset-flow"]
}
```
into it. 

**2.2 Setup Flow**
```
yarn add --dev flow-bin
yarn run flow init
yarn run flow
```

> Note: you might need to add `<PROJECT_ROOT>/.history/.*` under the `[ignore]` section of the `.flowconfig` file.

### 3. Setup Relay

**3.1 Installation**
```
yarn add react react-dom react-relay
```

**3.2 Set up the compiler​**
```
yarn add --dev relay-compiler
```

and add the script below into the `package.json` file:
```json
"scripts": {
  "relay": "relay-compiler"
}
```

also, add a `Relay` section:

```json
"relay": {
    "src": "./src/",
    "schema": "./data/schema.graphql"
  },
```

> Create the `./data/schema.graphql` locally.

**3.3 Set up babel-plugin-relay**

```
yarn add --dev babel-plugin-relay graphql
```

add the section below into `.babelrc`:
```json
"plugins": [
  "relay"
]
```

**3.4 Running the compiler**
```
yarn run relay
```
