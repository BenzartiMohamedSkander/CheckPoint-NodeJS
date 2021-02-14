const fs = require('fs')


fs.readdir(process.argv[2],function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {

    if (file.search("."+process.argv[3]) != -1)
     { console.log( file );}
   });
});



