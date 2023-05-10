import YaMApi from '../yamapi.js';
let obj = new YaMApi();
obj.updateSong().then(()=>{
    console.log(obj.getSong(true));
})