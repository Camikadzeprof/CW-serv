let GetCartsByUserIdService = require('../services/cart/getCartsByUserIdService');
let CreateCartForUserIdService = require('../services/cart/createCartForUserIdService');
let GetCartByCartIdService = require('../services/cart/getCartByCartIdService');
let EditCartByCartIdService = require('../services/cart/editCartByCartIdService');
let DeleteCartByCartIdService = require('../services/cart/deleteCartByCartIdService');
let GetCartsByMenuIdService = require('../services/cart/getCartsByMenuIdService');
let DeleteCartsByUserIdService = require('../services/cart/deleteCartsByUserIdService');

exports.getCartsByUserId = (req, res) => GetCartsByUserIdService(req, res);
exports.createCartForUserId = (req, res) => CreateCartForUserIdService(req, res);
exports.getCartByCartId = (req, res) => GetCartByCartIdService(req, res);
exports.editCartByCartId = (req, res) => EditCartByCartIdService(req, res);
exports.deleteCartByCartId = (req, res) => DeleteCartByCartIdService(req, res);
exports.getCartsByMenuId = (req, res) => GetCartsByMenuIdService(req, res);
exports.deleteCartsByUserId = (req, res) => DeleteCartsByUserIdService(req, res);