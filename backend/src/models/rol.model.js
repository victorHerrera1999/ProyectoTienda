module.exports = {

    get: function (conn, callback){
        conn.query("SELECT * FROM rol",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO rol (roles) VALUES ('${data.roles}')`,
            callback
        );
    },

    update: function (conn,data, id_rol, callback){
        conn.query(
            "UPDATE rol SET roles = '"+data.roles+" WHERE id_rol = "+id_rol+" ",        
            callback
        );
    },

    delete: function(conn, id_rol, callback){
        conn.query(`DELETE FROM rol WHERE id_rol = ${id_rol}`, callback);
    }
}