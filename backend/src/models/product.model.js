module.exports = {

    get: function (conn, callback){
        conn.query("SELECT p.id_product,p.product,c.categories,p.price_product,p.stock_product FROM products p JOIN categories c ON p.categories_product = c.id_categories",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO products (product, categories_product, images_product, price_product, stock_product) VALUES ('${data.product}', '${data.categories}', '', '${data.price_product}', '${data.stock_product}')`,
            callback
        );
    },

    update: function (conn,data, id_product, callback){
        conn.query(
            "UPDATE products SET product = '"+data.product+"',categories_product = '"+data.categories+"',price_product = '"+data.price_product+"',stock_product = '"+data.stock_product+"' WHERE products.id_product = "+id_product+" ",        
            callback
        );
    },

    delete: function(conn, id_product, callback){
        conn.query(`DELETE FROM products WHERE products.id_product = ${id_product}`, callback);
    }
}