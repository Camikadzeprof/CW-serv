let GetCartByUserIdService = require('../services/cart/getCartByUserIdService');
let CreateCartForUserIdService = require('../services/cart/createCartForUserIdService');
let DeleteCartsByUserIdService = require('../services/cart/deleteCartsByUserIdService');

exports.getCartByUserId = (req, res) => GetCartByUserIdService(req, res);
exports.createCartForUserId = (req, res) => CreateCartForUserIdService(req, res);
exports.deleteCartsByUserId = (req, res) => DeleteCartsByUserIdService(req, res);