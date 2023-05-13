let GetMenuByTypeIdService = require('../services/menu/getMenuByTypeIdService');
let CreateMenuForTypeIdService = require('../services/menu/createMenuForTypeIdService');
let GetMenuByMenuIdService = require('../services/menu/getMenuByMenuIdService');
let EditMenuByMenuIdService = require('../services/menu/editMenuByMenuIdService');
let DeleteMenuByMenuIdService = require('../services/menu/deleteMenuByMenuIdService');

exports.getPostsByTopicId = (req, res) => GetMenuByTypeIdService(req, res);
exports.createPostForTopicId = (req, res) => CreateMenuForTypeIdService(req, res);
exports.getPostByPostId = (req, res) => GetMenuByMenuIdService(req, res);
exports.editPostByPostId = (req, res) => EditMenuByMenuIdService(req, res);
exports.deletePostByPostId = (req, res) => DeleteMenuByMenuIdService(req, res);