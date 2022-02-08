"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const service_middleware_1 = require("../../middlewares/service/service.middleware");
const router = (0, express_1.Router)();
router.post('/', service_middleware_1.serviceMiddleware.checkDuplicateNames, controllers_1.serviceController.createService);
exports.serviceRouter = router;
//# sourceMappingURL=service.router.js.map