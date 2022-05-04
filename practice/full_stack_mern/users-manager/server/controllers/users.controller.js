const User = require('../models/user.model');
const bcrypt = require('bcrypt');
//const nodemailer = require("nodemailer");

module.exports.getAllUsers = async (request, response) => {
    User.find()
        .then(users => response.status(200).json(users))
        .catch(err => response.status(404).json({ message: "Something went wrong", error: err }));
}

module.exports.getUser = async (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(user => response.status(200).json(user))
        .catch(err => response.status(404).json({ message: "Something went wrong", error: err }));
}

function generate_token(length){
    //edit the token allowed characters
    const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    let b = [];
    for (let i=0; i<length; i++) {
        let j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");}

module.exports.createUser = async (request, response) => {
    // cuando se crea el usuario se genera el hash para guardar en la bdd
    // bcrypt.genSalt(saltRounds, function(err, salt) {
    //     bcrypt.hash(user.password, salt, function(err, hash) {

    //     });
    // });
    let newUser = { ...request.body };

    // Encripta el password
    const saltRounds = 10;
    //let hashNewUser = "";
    // bcrypt.hash(newUser.password, saltRounds, function (err, hash) {
    //     console.log(hash);
    //     hashNewUser = hash;
    //     //newUser = {...newUser, "password": hash};
    // });
    const hash = await bcrypt.hash(newUser.password, saltRounds);
    newUser.password = hash;

    // Genera el token
    newUser.token = generate_token(30);

    User.create(newUser)
        .then(user => {
            // let testAccount = await nodemailer.createTestAccount();

            // // create reusable transporter object using the default SMTP transport
            // let transporter = nodemailer.createTransport({
            //     host: "smtp.ethereal.email",
            //     port: 587,
            //     secure: false, // true for 465, false for other ports
            //     auth: {
            //         user: testAccount.user, // generated ethereal user
            //         pass: testAccount.pass, // generated ethereal password
            //     },
            // });

            // // send mail with defined transport object
            // let info = await transporter.sendMail({
            //     from: '"Coding dojo" <foo@example.com>', // sender address
            //     to: "bar@example.com, baz@example.com", // list of receivers
            //     subject: "Hello ✔", // Subject line
            //     text: "Hello world?", // plain text body
            //     html: "<b>Hello world?</b>", // html body
            // });

            response.status(201).json({ id: user._id });
        })
        .catch(err => response.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateUser = async (request, response) => {
    User.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(user => response.status(200).json(user))
        .catch(err => response.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteUser = async (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteUser => response.status(200).json(deleteUser))
        .catch(err => response.status(400).json({ message: "Something went wrong", error: err }));
};
