import db from "../config/database.js";

import { Login, Register, korzina, GetBirthday,korzinaCount, GetTovar, otzivi, create_zakaz,TypPay, oplata, AddToKorzina, sizeKorz } from "./user.js";

export const main = (req, res) => {
    const data = req.body;
    if(data.session) console.log("session true")
    function response(err, results) {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.json(results)
        }
    }
    switch(data.method) {
        case 'createUser':
            Register(req,res)
            break
        case 'Login':
            Login(req,res)
            break
        case 'getBirthday':
            GetBirthday(req,res)
            break
        case 'addNew':
            AddNew(req,res)
            break
        case 'GetTovar':
            GetTovar(req,res)
            break 
        case 'create_zakaz':
            create_zakaz(req,res)
            break 
        case 'TypPay':
            TypPay(req,res)
            break 
        case 'oplata':
            oplata(req,res)
            break 
        case 'AddToKorzina':
            AddToKorzina(req,res) 
            break 
        case 'sizeKorz':
            sizeKorz(req,res) 
            break 
        case 'korzina':
            korzina(req,res) 
            break 
        case 'korzinaCount':
            korzinaCount(req,res) 
            break
        
    }
}
