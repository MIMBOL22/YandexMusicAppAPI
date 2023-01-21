const yamapi = require('./yamapi');

yamapi.getSong().then((obj) => {
    console.log(obj);
})