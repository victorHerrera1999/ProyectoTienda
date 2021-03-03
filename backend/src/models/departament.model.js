module.exports = {

    get: function (conn, callback){
        conn.query("SELECT d.*,cou.*, pc.* FROM department d JOIN country cou ON d.id_country = cou.id_country JOIN postal_code pc ON cou.id_postal_code = pc.id_code",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO department (department, id_country) VALUES ('${data.department}', '${data.id_country}')`,
            callback
        );
    },

    update: function (conn,data, id_department, callback){
        conn.query(
            "UPDATE department SET department = '"+data.department+"' WHERE id_department = "+id_department+" ",        
            callback
        );
    },

    delete: function(conn, id_department, callback){
        conn.query(`DELETE FROM department WHERE id_department = ${id_department}`, callback);
    }
}