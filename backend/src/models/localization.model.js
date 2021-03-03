module.exports = {

    get: function (conn, callback){
        conn.query("SELECT lo.*,usu.*,cou.*,dp.*,cy.* FROM localization lo JOIN users usu ON lo.id_user = usu.id_user JOIN department dp ON lo.department = dp.id_department JOIN country cou ON lo.country = cou.id_country JOIN city cy ON lo.city = cy.id_city",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO localization (address, country, department, city, id_user) VALUES ('${data.address}', '${data.country}', '${data.department}', '${data.city}', '${data.id_user}')`,
            callback
        );
    },

    update: function (conn,data, id_localization, callback){
        conn.query(
            "UPDATE localization SET address = '"+data.address+"',country = '"+data.country+"',department = '"+data.department+"',city = '"+data.city+"', id_user = '"+data.id_user+"' WHERE id_localization  = "+id_localization+" ",        
            callback
        );
    },

    delete: function(conn, id_localization, callback){
        conn.query(`DELETE FROM localization WHERE id_localization = ${id_localization}`, callback);
    }
}