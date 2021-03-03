module.exports = {

    get: function (conn, callback){
        conn.query("SELECT * FROM payment_method",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO payment_method (type) VALUES ('${data.type}')`,
            callback
        );
    },

    update: function (conn,data, id_method, callback){
        conn.query(
            "UPDATE payment_method SET type = '"+data.type+"' WHERE id_method = "+id_method+" ",        
            callback
        );
    },

    delete: function(conn, id_method, callback){
        conn.query(`DELETE FROM payment_method WHERE id_method = ${id_method}`, callback);
    }
}