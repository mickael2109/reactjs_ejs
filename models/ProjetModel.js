import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const { DataTypes } = Sequelize

const Projet = db.define('projet', {
    titre:{ type: DataTypes.STRING, allowNull : false, },   
    description:{ type: DataTypes.STRING, allowNull : false, }, 
}, {
    freezeTableName: true

});

export default Projet;

(async()=>{
    await db.sync();
})();