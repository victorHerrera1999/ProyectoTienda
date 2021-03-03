module.exports = {

    get: function (conn, callback){
        conn.query("SELECT * FROM categories",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO categories (categories) VALUES ('${data.categories}')`,
            callback
        );
    },

    update: function (conn,data, id_categories, callback){
        conn.query(
            "UPDATE categories SET categories = '"+data.categories+"' WHERE id_categories = "+id_categories+" ",        
            callback
        );
    },

    delete: function(conn, id_categories, callback){
        conn.query(`DELETE FROM categories WHERE id_categories = ${id_categories}`, callback);
    }
}