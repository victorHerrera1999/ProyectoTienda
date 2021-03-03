module.exports = {

    get: function (conn, callback){
        conn.query("SELECT cy.*,dt.*,cou.*,pc.* FROM city cy JOIN department dt ON cy.id_department = dt.id_department JOIN country cou ON dt.id_country = cou.id_country JOIN postal_code pc ON cou.id_postal_code = pc.id_code",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO city (city, id_department) VALUES ('${data.city}', '${data.id_department}')`,
            callback
        );
    },

    update: function (conn,data, id_city, callback){
        conn.query(
            "UPDATE city SET city = '"+data.city+"',id_department = '"+data.id_department+"' WHERE id_city = "+id_city+" ",        
            callback
        );
    },

    delete: function(conn, id_city, callback){
        conn.query(`DELETE FROM city WHERE id_city = ${id_city}`, callback);
    }
}