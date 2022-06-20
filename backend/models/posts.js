const db = require('../util/database');


module.exports = class Post {
    constructor(noCuenta, estado, tipo, monto){
        this.noCuenta = noCuenta;
        this.estado = estado;
        this.tipo = tipo;
        this.monto = monto;
    }


    static fetchAll(){
        return db.execute('SELECT * FROM cuenta');
    }
    
    static guardar(post){
        return db.execute(
            'INSERT INTO cuenta (noCuenta, estado, tipo, monto) VALUES (?, ?, ?, ?)', [
                post.noCuenta, post.estado, post.tipo, post.monto
            ]
        );
    }

    static delete(id) {
        return db.execute('delete from cuenta where id = ?', [id]);
    }
};