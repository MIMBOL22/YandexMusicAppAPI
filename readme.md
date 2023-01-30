# YandexMusicAppAPI
![](https://i.imgur.com/C6iDHFI.png)

![](https://img.shields.io/github/stars/MIMBOL228/YandexMusicAppAPI.svg) 
![](https://img.shields.io/github/forks/MIMBOL228/YandexMusicAppAPI.svg) 
![](https://img.shields.io/github/tag/MIMBOL228/YandexMusicAppAPI.svg) 
![](https://img.shields.io/github/release/MIMBOL228/YandexMusicAppAPI.svg) 
![](https://img.shields.io/github/issues/MIMBOL228/YandexMusicAppAPI.svg)

---
API для получения данных о текущем треке в приложении "Яндекс Музыка" на Windows 10/11

## Установка
Для установки библиотеки выполните в терминале :

```sh
npm install yandexmusappapi
```

Добавьте в свой файл импорт библиотеки :
```js
import yamapi from './yamapi.js';
```

В момент, когда вам нужно будет узнать трек, вызваете функцию и обрабатываете через промис :
```js
yamapi.getSong().then(song => {
    console.log(song);
    // { id: '123456789', author: 'Author', name: 'Song name', img: 'https://avatars.yandex.net/get-music-content/123456789/123456789.200x200' }
});
```