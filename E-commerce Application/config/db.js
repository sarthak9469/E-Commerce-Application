const {Sequelize} = require ('sequelize');


const db = new Sequelize('E_Commerce', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const testConnection = async () => {
    try {
        await db.authenticate();
        console.log('The connection has been established successfully...')
    } catch (error) {
        console.error('The connection has not established', error);

    };
};

testConnection ();

module.exports = db;
