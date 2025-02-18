# Film!

![screen_app](./docs/app-screen.png)

[Дока на русском](./docs/readme.ru.md)

## Stack
- HTML 
- SCSS 
- TS 
- Webpack

## Project structure:
- ```src/``` — project source files
- ```src/components/``` — folder with JS components
- ```src/components/base/``` — folder with the base code
- ```src/components/model/``` — folder with data models
- ```src/components/controller/``` — folder with controller models
- ```src/components/view``` — folder with display classes
    - ```/common``` — folder with basic display classes
    - ```/partial``` — folder with specific display classes
    - ```/screen``` — folder with screen display classes

## Important files:
- ```src/pages/index.html``` — HTML file of the main page
- ```src/types/all-files.ts``` — file with types
- ```src/index.ts``` — is the application's entry point
- ```src/scss/styles.scss``` — the root file of styles
- ```src/utils/constants.ts``` file with constants
- ```src/utils/utils.ts``` file with utilities

## Installation and launch
To install and run the project, run the following commands

```
npm install
npm run start
```

or

```
yarn
yarn start
```


## Assembly

```
npm run build
```

or

```
yarn build
```
