const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
  User.count()
    .then(allDaUsers => res.json({ users: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
  // User.find()
  //   .then(allDaUsers => {
  //     // Revisa si existen datos.
  //     if (allDaUsers.length === 0) {
  //       return Promise.reject('No existen datos.');
  //     }

  //     return allDaUsers;
  //   })
  //   .then(allDaUsers => res.json({ users: allDaUsers }))
  //   .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(oneSingleUser => res.json({ user: oneSingleUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
