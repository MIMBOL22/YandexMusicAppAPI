import YaMApi from '../yamapi.js';
let obj = new YaMApi();
obj.updateSong().then(()=>{console.log(obj.getSong());})
// { id: '123456789', author: 'Author', name: 'Song name', img: 'https://avatars.yandex.net/get-music-content/123456789/123456789.200x200' }