# Film!

## Description
This is a special project for me, in which I tried to implement architectural approaches from scratch, inspired by such well-known technologies as Redux, MobX, Vuex, Effector and EventEmitter from Node.js .  

The project uses its own implementation of the application state management model (AppStateModel+ AppStateEmitter), which allows you to subscribe to events and centrally update data. This is similar to Pub/Sub or Event Bus architecture.  
Controllers work as intermediaries between the data model and the View, implementing the principles of MVC.  

All screens are view components that respond to state changes and events, similar to the components in Vue.js or React.  
The feature of this implementation is complete independence from third—party libraries for state management or routing. Everything is built on my own EventEmitter and strict separation of responsibilities between the application layers.  


![screen_app](./docs/app-screen.png)

[Дока на русском](./docs/README.ru.md)

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

