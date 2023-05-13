let GetOrderItemsByOrderIdService = require('../services/orderItem/getOrderItemsByOrderIdService');
let CreateOrderItemForOrderIdService = require('../services/orderItem/createOrderItemForOrderIdService');
let GetOrderItemByOrderItemIdService = require('../services/orderItem/getOrderItemByOrderItemIdService');
let EditOrderItemByOrderItemIdService = require('../services/orderItem/editOrderItemByOrderItemIdService');
let DeleteOrderItemByOrderItemIdService = require('../services/orderItem/deleteOrderItemByOrderItemIdService');
let GetOrderItemsByMenuIdService = require('../services/orderItem/getOrderItemsByMenuIdService');

exports.getOrderItemsByOrderId = (req, res) => GetOrderItemsByOrderIdService(req, res);
exports.createOrderItemForOrderId = (req, res) => CreateOrderItemForOrderIdService(req, res);
exports.getOrderItemByOrderItemId = (req, res) => GetOrderItemByOrderItemIdService(req, res);
exports.editOrderItemByOrderItemId = (req, res) => EditOrderItemByOrderItemIdService(req, res);
exports.deleteOrderItemByOrderItemId = (req, res) => DeleteOrderItemByOrderItemIdService(req, res);
exports.getOrderItemsByMenuId = (req, res) => GetOrderItemsByMenuIdService(req, res);