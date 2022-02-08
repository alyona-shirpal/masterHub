"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceTypeRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const router = (0, express_1.Router)();
router.post('/:service_id', controllers_1.serviceTypeController.createServiceType);
exports.serviceTypeRouter = router;
//# sourceMappingURL=service-type.router.js.map