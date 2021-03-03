module.exports = {

    get: function (conn, callback){
        conn.query("SELECT u.name_user,u.lastname_user,u.email_user,password_user,r.roles FROM users u JOIN rol r ON u.rol = r.id_rol",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO users (name_user, lastname_user, email_user, password_user, rol) VALUES ('${data.name_user}', '${data.lastname_user}', '${data.email_user}', '${data.password_user}', '${data.rol}')`,
            callback
        );
    },

    update: function (conn,data, id_user, callback){
        conn.query(
            "UPDATE users SET name_user = '"+data.name_user+"',lastname_user = '"+data.lastname_user+"',email_user = '"+data.email_user+"',password_user = '"+data.password_user+"' WHERE id_user = "+id_user+" ",        
            callback
        );
    },

    delete: function(conn, id_user, callback){
        conn.query(`DELETE FROM users WHERE id_user = ${id_user}`, callback);
    }
}