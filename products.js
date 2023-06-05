const fs = require('node:fs');

function responsiveTopnav() {
    var topnav = document.getElementById("myTopnav");
    if (topnav.className === "topnav") {
        topnav.className += " responsive";
    } else {
        topnav.className = "topnav";
    }
  }

// fs.writeFile("try.txt", "Hello from nodeJS!", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!")
// })


// fs.readFile("./try.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })