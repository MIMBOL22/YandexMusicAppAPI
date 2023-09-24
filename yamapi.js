import findInFiles from 'find-in-files';
import osLib from 'os';


const USER = osLib.userInfo().username;
const YANDEXPATH = "C:/Users/%u/AppData/Local/Packages/A025C540.Yandex.Music_vfvw9svesycw6/LocalCache/Logs";
const APIURI = "https://api.music.yandex.net/";
const IMGSIZE = "300x300";
const FAILIMG = "i.imgur.com/OSfTU6Z.png"

export default class YaMApi {
    song;
    apiURI;
    imgSize;
    failImg;
    constructor() {
        this.setYandexPath();
        this.setApiURI();
        this.setImgSize();
        this.setFailImg();
        this.song = {
            simple:{},
            pro:{}
        }
    }

    setYandexPath(yandexPath=""){
        this.yandexPath = (yandexPath?yandexPath:YANDEXPATH).replace("%u", USER);
    }
    setApiURI(apiURI=""){
        this.apiURI = (apiURI?apiURI:APIURI);
    }
    setImgSize(imgSize=""){
        this.imgSize = (imgSize?imgSize:IMGSIZE);
    }
    setFailImg(failImg=""){
        this.failImg = (failImg?failImg:FAILIMG);
    }


    async updateSong() {
        let rows = await findInFiles.find("PlayTrackInternalAsync", this.yandexPath, /log.*\.txt/)
        let lastRow = rows[Object.keys(rows)[0]];
        let metaMusicFromApp = JSON.parse(lastRow.line[lastRow.count - 1]).Track;
        let metaMusic = /(\d+)\: (.*) ~ (.*)/.exec(metaMusicFromApp);
        this.song.simple = {
            id: metaMusic[1],
            author: metaMusic[2],
            name: metaMusic[3]
        };
        let apiResp = await fetch(this.apiURI + "tracks/" + this.song.simple.id)
            .then(response => response.json());
        if (apiResp.result[0].albums[0].coverUri !== undefined){
            this.song.simple.img = apiResp.result[0].albums[0].coverUri.replaceAll("%%", this.imgSize);
        }else{
            this.song.simple.img = this.failImg;
        }
        this.song.pro = apiResp.result[0];
    }
    getSong(mode=false){ // false - Simple , true - Pro
        return mode ? this.song.pro : this.song.simple;
    }
}
