//Todos los datos los podras encontrar en Microsoft SQL Server Management Studio


const config = {
    server: 'DESKTOP-30VD0R3',  //Nombre del servidor
    database: 'Prueba',         //Nombre de la BD
    user: "admin",              //Tu usuario
    password:'123456789',       //Su contraseña
    options: {
        trustedConnection: true,
        encrypt: false,
        trustServerCertificate: true,
        instancename: 'DESKTOP-30VD0R3',    //Nombre de la Instancia
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    port: 1433 //El puerto puede variar pero casi siempre es 1433 o 1434
};

module.exports = config