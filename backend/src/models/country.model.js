module.exports = {

    get: function (conn, callback){
        conn.query("SELECT cou.*,pc.*,cp.* FROM country cou JOIN postal_code pc ON cou.id_postal_code = pc.id_code",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO country (country, id_postal_code) VALUES ('${data.country}', '${data.id_postal_code}')`,
            callback
        );
    },

    update: function (conn,data, id_country, callback){
        conn.query(
            "UPDATE country SET country = '"+data.country+"',id_postal_code = '"+data.id_postal_code+"' WHERE id_country = '"+id_country+"' ",        
            callback
        );
    },

    delete: function(conn, id_country, callback){
        conn.query(`DELETE FROM country WHERE id_country = ${id_country}`, callback);
    }
}