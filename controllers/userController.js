let GetUsersService = require('../services/user/getUsersService');
let GetUserByIdService = require('../services/user/getUserByIdService');
let EditUserByIdService = require('../services/user/editUserByIdService');
let DeleteUserByIdService = require('../services/user/deleteUserByIdService');

exports.getUsers = (req, res) => GetUsersService(req, res);
exports.getUserById = (req, res) => GetUserByIdService(req, res);
exports.editUserById = (req, res) => EditUserByIdService(req, res);
exports.deleteUserById = (req, res) => DeleteUserByIdService(req, res);