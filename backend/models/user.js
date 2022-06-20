const db = require('../util/database');


module.exports = class User {
    constructor(usuario, name, email, password, fechaNac, direccion, telefono){
        this.usuario = usuario;
        this.name = name;
        this.email = email;
        this.password = password;
        this.fechaNac = fechaNac;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    static buscar(email){
        return db.execute(
            'SELECT * FROM users WHERE email = ?', [email]
        );
    }

    
    static guardar(user){
        return db.execute(
            'INSERT INTO users (usuario, name, email, password, fechaNac, direccion, telefono) VALUES (?, ?, ?, ?, ?, ?, ?)', [
                user.usuario, user.name, user.email, user.password, user.fechaNac, user.direccion, user.telefono
            ]
        );
    }
    
    static editar(user){
        return db.execute(
            'UPDATE users SET usuario = ?, name = ?, email = ?, password = ?, fechaNac = ?, direccion = ?, telefono = ? WHERE id = ?', [
                user.usuario, user.name, user.email, user.password, user.fechaNac, user.direccion, user.telefono, user.id
            ]
        );
    }

    static eliminar(user){
        return db.execute(
            'DELETE FROM users WHERE id = ?', [user.id]
        );
    }
};

