"use strict"

const UserStorage = require("../../models/UserStorage");
const UserStorage = require("../../models/UserStorage");

const output ={
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
         psword = req.body.psword;
        
        const UserStorage = new UserStorage();
        
        // const response = {};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        // if(users.psword[idx] === psword){
        //     response.success = true;
        //     return res.json(resp);
        //  }
        // }
        
        // response.success = false;
        // response.msg = "로그인 실패";
        // return res.json();

    },
};


module.exports = {
 output,
 process,

};


