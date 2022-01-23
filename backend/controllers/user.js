import db from "../config/database.js";

export const Register = (req,res) => {
    const data = req.body.arguments;
    db.query(`
        INSERT INTO Users(SerName, Name, Patronymic, Phone, Mail, Login, Password)
        VALUE(
            '${data.fam}',
            '${data.name}',
            '${data.sername}',
            '${data.phone}',
            '${data.email}',
            '${data.login}',
            '${data.password}');`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

// export const UpdateUser = (req,res) => {
//     db.query(`
//         UPDATE `,
//         (err, results) => {             
//             if(err) {
//                 console.log(err);
//                 res.send(err)
//             } else {
//                 res.json(results)
//             }
//         }
//     )
// }



export const oplata = (req,res) => {
    const data = req.body.arguments;
    db.query(`
        INSERT INTO oplata SET TypOfCard ='${data.typ}', NomberOfCard='${data.number}', CVV='${data.Cvv}', Phone='${data.phone}', NomberZakaza=(idOplata), DataZakaza=(CURRENT_DATE()), Stoimost=(SELECT AllCoastTovar FROM mydb.korzina);`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}



export const TypPay = (req,res) => {
    const data = req.body.arguments;
    db.query(`
        INSERT INTO kurier (Streat, NumberOfHome, NumberOfFloot)
        VALUE(
            '${data.streat}',
            '${data.houze}',
            '${data.flat}');`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}


export const create_zakaz = (req,res) => {
    const data = req.body.arguments;
    db.query(`
        INSERT INTO create_zakaz(Sername, Name, Patronymic, Phone, Mail, PriceAll, CityOfDostavka)
        VALUE(
            '${data.fam}',
            '${data.name}',
            '${data.sername}',
            '${data.phone}',
            '${data.email}',
            '${data.PriceAll}',
            '${data.CityOfDostavka}');`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

export const otzivi = (req,res) => {
    const data = req.body.arguments;
    db.query(`
        INSERT INTO oplata(NameOfOtziv, Login, Otziv,)
        VALUE(
            '${data.NameOfOtziv}',
            '${data.Login}',
            '${data.Otziv}',);`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

export const Oplata = (req,res) => {
    const data = req.body.arguments;
    db.query(`
        INSERT INTO oplata(TypOfCard, NomberOfCard, CVV, Phone, NomberZakaza, DataZakaza, Stoimost)
        VALUE(
            '${data.TypOfCard}',
            '${data.NomberOfCard}',
            '${data.CVV}',
            '${data.Phone}',
            '${data.NomberZakaza}',
            '${data.DataZakaza}',
            '${data.Stoimost}');`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

export const zapinfo = (req,res) => {
    const data = req.body.arguments;
    db.query(`
        INSERT INTO Users(TypOfCard, NomberOfCard, CVV, Phone, NomberZakaza, DataZakaza, Stoimost)
        VALUE(
            '${data.TypOfCard}',
            '${data.NomberOfCard}',
            '${data.CVV}',
            '${data.Phone}',
            '${data.NomberZakaza}',
            '${data.DataZakaza}',
            '${data.Stoimost}');`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

export const Login = (req,res) => {
    const {email,password} = req.body.arguments;
    console.log(email)
    console.log(password)
    db.query(`
        SELECT
            idUsers AS uid,
            Login as log
        FROM
            users
        WHERE
            mail = '${email}' AND
            password = '${password}'`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

export const GetBirthday = (req, res) => {
    const data = req.body.arguments

    const earlierDays = data.earlierDays || 5
    const limit = data.limit || 6

    db.query(`
        SELECT
            userName,
            birthday
        FROM
            Users
        WHERE
            birthday >= now() - INTERVAL ${earlierDays} DAY
        LIMIT ${limit}`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

export const GetTovar = (req, res) => {
    const limit = req.body.arguments.limit
    db.query(`
        SELECT name, cena, ImageTovara FROM mydb.tovar;`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}
// 

export const AddToKorzina = (req,res) => {
    const data = req.body.arguments;
    console.log("AddToKorzina")
    db.query(`
        INSERT INTO korzina(id_tovara, AllCountTovar, AllCoastTovar, Create_zakaz_idCreate_zakaz, Tovar_idTovar)
        VALUE(
            '${data.id_tovara}',
            '1',
            '2',
            '${data.Create_zakaz_idCreate_zakaz}',
            '${data.Tovar_idTovar}');`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}
export const sizeKorz = (req, res) => {
    const data = req.body.arguments;
    db.query(`
        SELECT Tovar_idTovar FROM mydb.korzina WHERE id_tovara = '${data.author}';`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}
export const korzina = (req, res) => {
    const data = req.body.arguments;
    console.log(data.author)
    db.query(`
        SELECT * FROM mydb.korzina WHERE id_tovara = '${data.author}';`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}
export const korzinaCount = (req, res) => {
    const data = req.body.arguments;
    console.log(data.author)
    db.query(`
        SELECT SUM(AllCoastTovar) AS sumary FROM mydb.korzina WHERE id_tovara = '${data.author}';`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}