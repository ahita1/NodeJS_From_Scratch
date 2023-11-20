// ***this is a file for showing a file system modules haha***

const fs = require('fs')

// ***syncronously reading data haha***
// const files = fs.readdirSync('./')
// console.log(files);


// ***asyncronously reading data haha***
fs.readdir('./', (err  ,files) => {
    if (err)
        console.log('Error ', err);
    else
        console.log('Result' , files);
})