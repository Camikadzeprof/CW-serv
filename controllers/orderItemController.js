let GetOrderItemsByOrderIdService = require('../services/orderItem/getOrderItemsByOrderIdService');
let CreateOrderItemForOrderIdService = require('../services/orderItem/createOrderItemForOrderIdService');
let GetOrderItemByOrderItemIdService = require('../services/orderItem/getOrderItemByOrderItemIdService');
let DeleteOrderItemByOrderItemIdService = require('../services/orderItem/deleteOrderItemByOrderItemIdService');

exports.getOrderItemsByOrderId = (req, res) => GetOrderItemsByOrderIdService(req, res);
exports.createOrderItemForOrderId = (req, res) => CreateOrderItemForOrderIdService(req, res);
exports.getOrderItemByOrderItemId = (req, res) => GetOrderItemByOrderItemIdService(req, res);
exports.deleteOrderItemByOrderItemId = (req, res) => DeleteOrderItemByOrderItemIdService(req, res);