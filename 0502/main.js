const fs = require('fs');
fs.unlink('./test.txt', (err)=>{
    if (err) throw err;
    console.log('sucessfully delete the test.txt');
})