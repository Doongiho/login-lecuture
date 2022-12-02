"use strict"

const { login } = require("../../../routes/home/home.ctrl");

const id = document.querySelector("#id"),
pseord = document.querySelector("#psword"), 
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.ariaValueMax,
        psword:psword.value,
    };
    console.log(req);
}
