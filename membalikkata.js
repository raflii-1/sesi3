const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let kalimat = "zidan imup";
let kalimatTerbalik = "";
for (let i = kalimat.length - 1; i >= 0; i--) {
    kalimatTerbalik += kalimat[i];
}
rl.close();
console.log("kalimat terbalik:" + kalimatTerbalik);