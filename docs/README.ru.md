# Film!

![screen_app](./app-screen.png)

## Стек
- HTML
- SCSS
- TS
- Webpack

## Структура проекта:
- ```src/``` — исходные файлы проекта
- ```src/components/``` — папка с JS-компонентами
- ```src/components/base/``` — папка с базовым кодом
- ```src/components/model/``` — папка с моделями данных
- ```src/components/controller/``` — папка с моделями контроллеров
- ```src/components/view``` — папка с классами отображения
    - ```/common``` — папка с базовыми классами отображения
    - ```/partial``` — папка с конкретными классами отображения
    - ```/screen``` — папка с классами отображения экрана

## Важные файлы:
- ```src/pages/index.html``` — HTML-файл главной страницы
- ```src/types/all-files.ts``` — файл с типами
- ``src/index.ts`` — это точка входа в приложение
- ``src/scss/styles.scss`` — корневой файл стилей
- ``src/utils/constants.ts`` - файл с константами
- ``src/utils/utils.ts` с утилитами

## Установка и запуск
Для установки и запуска проекта выполните следующие команды

```
npm установить
npm запустить start
```

или

```
yarn
yarn start
```


## Сборка

```
npm run build
```

или

```
yarn build
```

## Автор

[Кирилл Дорошев (DKMFzF)](https://vk.com/dkmfzf )

## Лицензия

This project is licensed under the MIT license

Спасибо Яндекс Практикум!
