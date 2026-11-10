# Async/Await

[![CI](https://github.com/NadiaS80/ajs-async-await/actions/workflows/ci.yml/badge.svg)](https://github.com/NadiaS80/ajs-async-await/actions/workflows/ci.yml)

`GameSavingLoader.load()` загружает сохранение через `async/await`. В `app.js` асинхронная IIFE выводит сохранение и обрабатывает ошибки через `try/catch`.

```sh
npm ci
npm run lint
npm run coverage -- --runInBand
npm run build
```
