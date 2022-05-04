const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.login = async (request, response) => {
    console.log(request.body);
    // Verifica si existe el usuario.
    User.findOne({ email: request.body.email })
        .then(user => {
            console.log(user);
            if (user) {
                if (user.lockedAccount) {
                    response.status(401).json({ message: "El usuario está bloqueado." });
                } else if (!user.confirmedAccount) {
                    response.status(401).json({ message: "Cuenta no está activa." });
                } else {
                    // Genera el hash del password que ingresa en pantalla
                    bcrypt.compare(request.body.password, user.password)
                        .then(function (err, result) {
                            if (err) {
                                console.log(err);
                                response.status(401).json({ message: "El usuario o password incorrecto" });
                            } else {
                                // Generar token
                                const payload = {
                                    iss: "Curso MERN", // nombre de la compañía
                                    iat: Math.floor(new Date().getTime() / 1000),
                                    exp: Math.floor(new Date().setMinutes(5).getTime() / 1000),
                                    sub: request.body.email,
                                    Email: user.email
                                };
                                var token = jwt.sign(payload, 'shhhhh');
                                response.status(200).json({ token: token });
                            }
                        });
                }
            } else {
                response.status(401).json({ message: "El usuario o password incorrecto" })
            }
        })
        .catch(err => response.status(400).json({ message: "Something went wrong", error: err }));
}

module.exports.activate = (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(user => {
            if (user.token === request.params.token) {
                User.findOneAndUpdate({ _id: request.params.id }, { confirmedAccount: true }, { new: true })
                    .then(userUpdate => response.status(200).json({ id: userUpdate._id }))
                    .catch(err => response.status(400).json({ message: "Something went wrong", error: err }));
            } else {
                response.status(401).json({ message: "No autorizado." });
            }
        })
        .catch(err => response.status(404).json({ message: "Something went wrong", error: err }));
}