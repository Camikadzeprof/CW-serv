let CreateOrderForUserIdService = require('../services/order/createOrderForUserIdService');
let GetOrderByOrderIdService = require('../services/order/getOrderByOrderIdService');
let EditOrderByOrderIdService = require('../services/order/editOrderByOrderIdService');
let DeleteOrderByOrderIdService = require('../services/order/deleteOrderByOrderIdService');
let GetOrdersByUserIdService = require('../services/order/getOrdersByUserIdService');
let GetOrdersByCourierIdService = require('../services/order/getOrdersByCourierIdService');
let GetOrdersByStatusService = require('../services/order/getOrdersByStatusService');
let GetOrdersService = require('../services/order/getOrdersService');

exports.createOrderForUserId = (req, res) => CreateOrderForUserIdService(req, res);
exports.getOrderByOrderId = (req, res) => GetOrderByOrderIdService(req, res);
exports.editOrderByOrderId = (req, res) => EditOrderByOrderIdService(req, res);
exports.deleteOrderByOrderId = (req, res) => DeleteOrderByOrderIdService(req, res);
exports.getOrdersByUserId = (req, res) => GetOrdersByUserIdService(req, res);
exports.getOrdersByCourierId = (req, res) => GetOrdersByCourierIdService(req, res);
exports.getOrdersByStatus = (req, res) => GetOrdersByStatusService(req, res);
exports.getOrders = (req, res) => GetOrdersService(req, res);