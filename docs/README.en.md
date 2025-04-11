# Film!

## Description
This is my **special** project, where I**implemented an architectural approach**from scratch, inspired by **Redux, MobX, Vuex, Effector and EventEmitter from Node.js **.

**It is based on its own state management system (AppStateModel + AppStateEmitter) with event subscription and centralized data update, on a Pub/Sub basis.**

Controllers link data and an MVC—style view, and screens are components that respond to state changes, as in **Vue.js** or **React**.

**The main feature** is complete independence from third—party libraries for state and routing. Everything is built on its own EventEmitter and strict separation of application layers.

![screen_app](./app-screen.png)

[If you're interested, here's another project that follows a similar principle](https://github.com/DKMFzF/web-larek-MVC.git )

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

## Author

[Kirill Doroshev (DKMFzF)](https://vk.com/dkmfzf )

## License

This project is licensed under the MIT license

Спасибо Яндекс Практикум!

