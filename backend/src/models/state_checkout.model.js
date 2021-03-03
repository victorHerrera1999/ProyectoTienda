module.exports = {

    get: function (conn, callback){
        conn.query("SELECT * FROM state_checkout",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO state_checkout (state, icon, colors) VALUES ('${data.state}', '${data.icon}', '${data.colors}')`,
            callback
        );
    },

    update: function (conn,data, id_state, callback){
        conn.query(
            "UPDATE state_checkout SET state = '"+data.state+"',icon = '"+data.icon+"',colors = '"+data.colors+"' WHERE id_state = "+id_state+" ",        
            callback
        );
    },

    delete: function(conn, id_state, callback){
        conn.query(`DELETE FROM state_checkout WHERE id_state = ${id_state}`, callback);
    }
}