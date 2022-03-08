# A todo App using React Reley
## Project Setup

#### 1. Create React App using Yarn
```
yarn create react-app relay-todo
```

#### 2. Add Flow static type checker

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
