module.exports = {

    get: function (conn, callback){
        conn.query("SELECT co.*,usu.*,p.* FROM shoppingcart co JOIN users usu ON co.user = usu.id_user JOIN products p ON co.product = p.id_product JOIN state_checkout sc ON co.state = sc.id_state JOIN payment_method pm ON co.payment_method = pm.id_method",callback);
    },

    create: function (conn,data, callback){
        conn.query(
            `INSERT INTO shoppingcart (user, product, total, state, payment_method) VALUES ('${data.user}', '${data.product}', '${data.total}', '${data.state}', '${data.payment_method}')`,
            callback
        );
    },

    update: function (conn,data, id_cart , callback){
        conn.query(
            "UPDATE shoppingcart SET user = '"+data.user+"',product = '"+data.product+"',total = '"+data.total+"',state = '"+data.state+"',payment_method = '"+data.payment_method+"' WHERE id_cart  = "+id_cart +" ",        
            callback
        );
    },

    delete: function(conn, id_cart , callback){
        conn.query(`DELETE FROM shoppingcart WHERE id_cart  = ${id_cart }`, callback);
    }
}