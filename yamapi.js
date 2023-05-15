import fs from 'fs/promises';
import { resolve } from 'path';
import osLib from 'os';


const USER = osLib.userInfo().username;
const YANDEXPATH = "C:/Users/%u/AppData/Local/Packages/A025C540.Yandex.Music_vfvw9svesycw6/LocalCache/Logs";
const APIURI = "https://api.music.yandex.net/";
const IMGSIZE = "300x300";
const FAILIMG = "i.imgur.com/OSfTU6Z.png"

export default class YaMApi {
    yandexPath;
    apiURI;
    imgSize;
    failImg;
    song;
    constructor() {
        this.setYandexPath();
        this.setApiURI();
        this.setImgSize();
        this.setFailImg();
        this.setSong({
            simple:{},
            pro:{}
        });
    }

    setYandexPath(yandexPath = YANDEXPATH){
        this.yandexPath = yandexPath.replace("%u", USER);
    }
    setApiURI(apiURI = APIURI){
        this.apiURI = apiURI;
    }
    setImgSize(imgSize = IMGSIZE){
        this.imgSize = imgSize;
    }
    setFailImg(failImg = FAILIMG){
        this.failImg = failImg;
    }

    setSong(song){
        this.song = song;
    }


    async updateSong() {
        const lastLog = (await fs.readdir(this.yandexPath)).filter(( name => /log.*\.txt/.test(name) )).at(-1)
        const logData = await fs.readFile(resolve(this.yandexPath, lastLog))
        const lastMatchedLine = logData.toString().match(/(.*PlayTrackInternalAsync.*)/gm).at(-1)
        const metaMusicFromApp = JSON.parse(lastMatchedLine).Track;
        const metaMusic = /(\d+)\: (.*) ~ (.*)/.exec(metaMusicFromApp);

        let img = "";

        let apiResp = await fetch(this.apiURI + "tracks/" + metaMusic[1])
            .then(response => response.json());

        if (apiResp.result[0].coverUri !== undefined){
            img = apiResp.result[0].coverUri.replaceAll("%%", this.imgSize);
        }else{
            img = this.failImg;
        }

        this.setSong({
            simple:{
                id: metaMusic[1],
                author: metaMusic[2],
                name: metaMusic[3],
                img: img
            },
            pro:apiResp.result[0]
        })
    }
    getSong(mode=false){ // false - Simple , true - Pro
        return mode ? this.song.pro : this.song.simple;
    }
}
