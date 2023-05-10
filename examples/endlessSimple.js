import YaMApi from '../yamapi.js';
let obj = new YaMApi();
const endlessSimple = async ()=> {
    await obj.updateSong()
    let song = obj.getSong()
    console.clear()
    console.log(song);
    // { id: '123456789', author: 'Author', name: 'Song name', img: 'https://avatars.yandex.net/get-music-content/123456789/123456789.200x200' }
}
setInterval(endlessSimple,1000)