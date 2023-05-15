# YandexMusicAppAPI
![](https://i.imgur.com/C6iDHFI.png)

![](https://img.shields.io/github/stars/MIMBOL228/YandexMusicAppAPI.svg) 
![](https://img.shields.io/github/forks/MIMBOL228/YandexMusicAppAPI.svg) 
![](https://img.shields.io/github/tag/MIMBOL228/YandexMusicAppAPI.svg) 
![](https://img.shields.io/github/release/MIMBOL228/YandexMusicAppAPI.svg) 
![](https://img.shields.io/github/issues/MIMBOL228/YandexMusicAppAPI.svg)

---
API для получения данных о текущем треке в приложении "Яндекс Музыка" на Windows 10/11

# Установка
### Для установки библиотеки выполните в терминале :

`$ npm install yandexmusappapi`

 ### Подключение библиотеки::
```js
import YaMApi from 'yandexmusappapi';
let api = new YaMApi();
```
----
# Список методов:

### updateSong() :
 Обновить данные о треке

----
### async getSong(mode : boolean = false) :
 Получение данных о песне. Доступно 2 режима: simple (false) и pro (true).

 Пример ответа (simple):

```json
 { 
  "id": "123456789",
  "author": "Author", 
  "name": "Song name", 
  "img": "https://avatars.yandex.net/get-music-content/123456789/123456789.200x200" 
 }
```

 Пример ответа (pro):
```json
{
  "id": "66717245",
  "realId": "66717245",
  "title": "Улетаю",
  "major": {
    "id": 308,
    "name": "ONERPM"
  },
  "available": true,
  "availableForPremiumUsers": true,
  "availableFullWithoutPermission": false,
  "availableForOptions": [
    "bookmate"
  ],
  "disclaimers": [],
  "storageDir": "",
  "durationMs": 200140,
  "fileSize": 0,
  "r128": {
    "i": -12.35,
    "tp": 0.55
  },
  "fade": {
    "inStart": 0.1,
    "inStop": 2.8,
    "outStart": 194.9,
    "outStop": 197.9
  },
  "previewDurationMs": 30000,
  "artists": [
    {
      "id": 156446,
      "name": "A'Studio",
      "various": false,
      "composer": false,
      "cover": {
        "type": "from-artist-photos",
        "uri": "avatars.yandex.net/get-music-content/1781407/18cb605c.p.156446/%%",
        "prefix": "18cb605c.p.156446/"
      },
      "genres": []
    }
  ],
  "albums": [
    {
      "id": 14476115,
      "title": "Улетаю",
      "metaType": "music",
      "year": 2005,
      "releaseDate": "2005-03-11T00:00:00+03:00",
      "coverUri": "avatars.yandex.net/get-music-content/4404215/5026b3e1.a.14476115-1/%%",
      "ogImage": "avatars.yandex.net/get-music-content/4404215/5026b3e1.a.14476115-1/%%",
      "genre": "ruspop",
      "trackCount": 10,
      "likesCount": 351,
      "recent": false,
      "veryImportant": false,
      "artists": [
        {
          "id": 156446,
          "name": "A'Studio",
          "various": false,
          "composer": false,
          "cover": {
            "type": "from-artist-photos",
            "uri": "avatars.yandex.net/get-music-content/1781407/18cb605c.p.156446/%%",
            "prefix": "18cb605c.p.156446/"
          },
          "genres": []
        }
      ],
      "labels": [
        {
          "id": 840602,
          "name": "A'Studio"
        }
      ],
      "available": true,
      "availableForPremiumUsers": true,
      "availableForOptions": [
        "bookmate"
      ],
      "availableForMobile": true,
      "availablePartially": false,
      "bests": [
        66717245,
        66717251
      ],
      "trackPosition": {
        "volume": 1,
        "index": 2
      }
    }
  ],
  "coverUri": "avatars.yandex.net/get-music-content/4404215/5026b3e1.a.14476115-1/%%",
  "ogImage": "avatars.yandex.net/get-music-content/4404215/5026b3e1.a.14476115-1/%%",
  "lyricsAvailable": false,
  "type": "music",
  "rememberPosition": false,
  "trackSharingFlag": "COVER_ONLY",
  "lyricsInfo": {
    "hasAvailableSyncLyrics": false,
    "hasAvailableTextLyrics": true
  },
  "trackSource": "OWN"
}
```
----
### setYandexPath(yandexPath : string | null = "") :
Установка пути до лога. 

Доступна переменная %u - имя пользователя.

По-умолчанию:
```
C:/Users/%u/AppData/Local/Packages/A025C540.Yandex.Music_vfvw9svesycw6/LocalCache/Logs
```

----
### setApiURI(apiURI : string | null = "") :
Установка URI до API Яндекса.

По-умолчанию:
```
https://api.music.yandex.net/
```

----
### setImgSize(imgSize : string | null = "") :
Квадратный размер изображения трека (Только для simple режима)

По-умолчанию:
```
300x300
```

----
### setFailImg(failImg : string | null = "") :
Ссылка на запасное изображение. 

Яндекс не всегда возвращает ссылку на картинку, поэтому будет возвращаться эта

По-умолчанию:
```
i.imgur.com/OSfTU6Z.png
```

