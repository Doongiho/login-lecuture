"use strict"

class UserStorage {
    users = {
        id: ["luck131313", "서둥이", "서밀키"],
        psword: ["1234", "12345", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };
    static getUsers(){
        return this.#user;
    }
    
}

module.exports = UserStorage;