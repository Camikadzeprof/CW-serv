let GetMenuByTypeNameService = require('../services/menu/getMenuByTypeNameService');
let CreateMenuForTypeIdService = require('../services/menu/createMenuForTypeIdService');
let GetMenuByMenuIdService = require('../services/menu/getMenuByMenuIdService');
let GetMenuByNameService = require('../services/menu/getMenuByNameService');
let EditMenuByMenuIdService = require('../services/menu/editMenuByMenuIdService');
let DeleteMenuByMenuIdService = require('../services/menu/deleteMenuByMenuIdService');
let GetMenuService = require('../services/menu/getMenuService');

exports.getMenuByTypeName = (req, res) => GetMenuByTypeNameService(req, res);
exports.createMenuForTypeId = (req, res) => CreateMenuForTypeIdService(req, res);
exports.getMenuByMenuId = (req, res) => GetMenuByMenuIdService(req, res);
exports.getMenuByName = (req, res) => GetMenuByNameService(req, res);
exports.editMenuByMenuId = (req, res) => EditMenuByMenuIdService(req, res);
exports.deleteMenuByMenuId = (req, res) => DeleteMenuByMenuIdService(req, res);
exports.getMenu = (req, res) => GetMenuService(req, res);