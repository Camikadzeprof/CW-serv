let GetCartItemsByCartIdService = require('../services/cartItem/getCartItemsByCartIdService');
let CreateCartItemForCartIdService = require('../services/cartItem/createCartItemForCartIdService');
let GetCartItemByCartItemIdService = require('../services/cartItem/getCartItemByCartItemIdService');
let EditCartItemByCartItemIdService = require('../services/cartItem/editCartItemByCartItemIdService');
let DeleteCartItemByCartItemIdService = require('../services/cartItem/deleteCartItemByCartItemIdService');

exports.getCartItemsByCartId = (req, res) => GetCartItemsByCartIdService(req, res);
exports.createCartItemForCartId = (req, res) => CreateCartItemForCartIdService(req, res);
exports.getCartItemByCartItemId = (req, res) => GetCartItemByCartItemIdService(req, res);
exports.editCartItemByCartItemId = (req, res) => EditCartItemByCartItemIdService(req, res);
exports.deleteCartItemByCartItemId = (req, res) => DeleteCartItemByCartItemIdService(req, res);