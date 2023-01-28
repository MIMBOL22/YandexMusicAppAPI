const yamapi = require('./yamapi');

yamapi.getSong().then((obj) => {
    console.log(obj);
    // { id: '123456789', author: 'Author', name: 'Song name', img: 'https://avatars.yandex.net/get-music-content/123456789/123456789.200x200' }
})