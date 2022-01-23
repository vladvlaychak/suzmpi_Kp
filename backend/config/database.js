import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    database: "mydb",
    password: "admin"
});

export default db;