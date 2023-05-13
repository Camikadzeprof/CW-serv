let CreateTypeService = require('../services/type/createTypeService')
let GetTypesService = require('../services/type/getTypesService');
let GetTypeByNameService = require('../services/type/getTypeByNameService');
let EditTypeByIdService = require('../services/type/editTypeByIdService');
let DeleteTypeByNameService = require('../services/type/deleteTypeByNameService');

exports.createType = (req,res) => CreateTypeService(req, res);
exports.getTypes = (req, res) => GetTypesService(req, res);
exports.getTypeByName = (req, res) => GetTypeByNameService(req, res);
exports.editTypeById = (req, res) => EditTypeByIdService(req, res);
exports.deleteTypeByName = (req, res) => DeleteTypeByNameService(req, res);