const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');
const url = 'https://ia600104.us.archive.org/zipview.php?zip=/32/items/Madokami.NotManga/Madokami.Novels.zip';

rp(url)
    .then(function (html) {
        console.log("Success!");
        console.log($('table > caption', html)).text;
    })
    .catch(function (err) {
        console.log(err);
    });

function search() {
    //use regexp to search
};

function download() {
    //download the thing selected by user in the returned things from search
};

function downloadAll() {
    rp("https://ia600104.us.archive.org/32/items/Madokami.NotManga/Madokami.Novels.zip")
        .then(function (zipfile) {
            zipfile.pipe(fs.createWriteStream('./books'));
        })
        .catch(function (err) {
            console.log(err);
        });
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function ask() {
    readline.question(`download? Y/N`, (answer) => {
        switch (answer) {
            case 'Y':
                downloadAll()
                console.log('downloading')
            case 'N':
                console.log('cancelled')
        }
        readline.close()
    })
}