'use strict'

console.log("Ada pesan tersembunyi disini...");

let tglSekarang = new Date();
let formatTgl = tglSekarang.toDateString();
let pilihElemen = document.getElementById("tanggal");
pilihElemen.innerHTML = formatTgl;

console.log(formatTgl);