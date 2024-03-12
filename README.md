# Профильное задание на стажировку Frontend-разработчиком Вконтакте

## Приложение развернуто на хостинге Vercel по [ссылке](https://vk-mini-app-with-ssr.vercel.app/)
Изначально написал приложение на Next.js, но на моменте деплоя по каким-то причинам приложение не отображало ничего кроме PanelHeader. При этом, запуская его локально через vk-tunnel - все работало прекрасно. Переделал приложение без SSR на чистом React, так как не нашел причину данного поведения.

## Данный проект собран с помощью [Next.js](https://nextjs.org/)

### Архитектурная методология
[Feature Sliced Design](https://feature-sliced.design/)

### Список используемых технологий:

- [Next.js](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://www.npmjs.com/package/yup)
- [Axios](https://www.npmjs.com/package/axios)
- [VK UI](https://vkcom.github.io/VKUI/)
- [VK Bridge](https://dev.vk.com/ru/bridge/overview)

### Команда для запуска
```js
pnpm install
pnpm dev
```

### Другие команды
```js
pnpm build - запуск сборки приложения
pnpm type-check - запуск проверки типизации
pnpm lint/lint:md/lint:md:fix - запуск проверки линтером файлов
pnpm format - форматирование файлов prettier
pnpm tunnel - запуск локально сервера через VK приложение
pnpm deploy:vk - запуск сборки и деплоя приложения в VK
```
