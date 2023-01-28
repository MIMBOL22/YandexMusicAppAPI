var findInFiles = require('find-in-files');
var request = require('request');
var os = require('os');

var yandexPath = "C:/Users/" + os.userInfo().username + "/AppData/Local/Packages/A025C540.Yandex.Music_vfvw9svesycw6/LocalCache/Logs",
    apiLink = "https://api.music.yandex.net/tracks/";

exports.getSong = () => {
    var promise = new Promise(resolve => {
        findInFiles.find("PlayTrackInternalAsync", yandexPath, /log.*\.txt/).then(results => {
            var b = results[Object.keys(results)[0]];
            var regex = /(\d+)\: (.*) ~ (.*)/gm;
            var c = JSON.parse(b.line[b.count - 1]).Track;
            var ret = regex.exec(c);
            var song = {
                id: ret[1],
                author: ret[2],
                name: ret[3]
            };
            request(apiLink + song.id, (error, response, body) => {
                song.img = "https://" + JSON.parse(body).result[0].coverUri.replaceAll("%%", "200x200")
                resolve(song);
            });
        })
    })
    return promise;
};