import { Sequelize } from "sequelize";

const db = new Sequelize('freedb_dbnodejs','freedb_node-ejs','!%$x8j2D!QFRy&t',{
    host: 'sql.freedb.tech',
    dialect: 'mysql'
})

export default db;