module.exports = {

    get: function (conn, callback){
        conn.query("SELECT con.*,u.* FROM contact con JOIN users u ON con.id_user = u.id_user",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO contact (type, number, id_user) VALUES ('${data.type}', '${data.number}','${data.id_user}')`,
            callback
        );
    },

    update: function (conn,data, id_contact, callback){
        conn.query(
            "UPDATE contact SET type = '"+data.type+"',number = '"+data.number+"',id_user = '"+data.id_user+"' WHERE id_contact = "+id_contact+" ",        
            callback
        );
    },

    delete: function(conn, id_contact, callback){
        conn.query(`DELETE FROM contact WHERE id_contact = ${id_contact}`, callback);
    }
}