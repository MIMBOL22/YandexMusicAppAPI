import findInFiles from 'find-in-files';
import fetch from 'node-fetch';
import osLib from 'os';
const yandexPath = "C:/Users/" + osLib.userInfo().username + "/AppData/Local/Packages/A025C540.Yandex.Music_vfvw9svesycw6/LocalCache/Logs",
    // Да, да, этот путь у всех статичный.

    apiLink = "https://api.music.yandex.net/tracks/",
    regexMetaMusic = /(\d+)\: (.*) ~ (.*)/;

const yamapi = {
    getSong: async() => {
        return new Promise(resolve => {
            findInFiles.find("PlayTrackInternalAsync", yandexPath, /log.*\.txt/)
                .then(rows => {
                    let lastRow = rows[Object.keys(rows)[0]];
                    let metaMusicFromApp = JSON.parse(lastRow.line[lastRow.count - 1]).Track;
                    let metaMusic = regexMetaMusic.exec(metaMusicFromApp);
                    let song = {
                        id: metaMusic[1],
                        author: metaMusic[2],
                        name: metaMusic[3]
                    };
                    return song;
                }).then(song => {
                    fetch(apiLink + song.id)
                        .then(response => response.json())
                        .then(response => {
                            song.img = "https://" + response.result[0].coverUri.replaceAll("%%", "200x200")
                            resolve(song);
                        });
                });
        });
    }
};
export default yamapi;