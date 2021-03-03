module.exports = {

    get: function (conn, callback){
        conn.query("SELECT * FROM postal_code",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO postal_code (code, flags) VALUES ('${data.code}', '${data.flags}')`,
            callback
        );
    },

    update: function (conn,data, id_code, callback){
        conn.query(
            "UPDATE postal_code SET code = '"+data.code+"',flags = '"+data.flags+"' WHERE id_code = "+id_code+" ",        
            callback
        );
    },

    delete: function(conn, id_code, callback){
        conn.query(`DELETE FROM postal_code WHERE id_code = ${id_code}`, callback);
    }
}