let CreateOrderForUserIdService = require('../services/order/createOrderForUserIdService');
let GetOrderByOrderIdService = require('../services/order/getOrderByOrderIdService');
let EditOrderByOrderIdService = require('../services/order/editOrderByOrderIdService');
let DeleteOrderByOrderIdService = require('../services/order/deleteOrderByOrderIdService');
let GetOrdersByUserIdService = require('../services/order/getOrdersByUserIdService');

exports.createOrderForUserId = (req, res) => CreateOrderForUserIdService(req, res);
exports.getOrderByOrderId = (req, res) => GetOrderByOrderIdService(req, res);
exports.editOrderByOrderId = (req, res) => EditOrderByOrderIdService(req, res);
exports.deleteOrderByOrderId = (req, res) => DeleteOrderByOrderIdService(req, res);
exports.getOrdersByUserId = (req, res) => GetOrdersByUserIdService(req, res);