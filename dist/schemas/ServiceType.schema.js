"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTypeModel = exports.ServiceTypeSchema = void 0;
const mongoose_1 = require("mongoose");
const enum_1 = require("../enum");
exports.ServiceTypeSchema = new mongoose_1.Schema({
    service_id: {
        required: true,
        type: mongoose_1.Types.ObjectId,
        ref: enum_1.ECollectionNames.SERVICE
    },
    title: {
        type: 'string',
        required: true,
        trim: true,
        lowercase: true
    }
}, {
    id: false,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.ServiceTypeModel = (0, mongoose_1.model)(enum_1.ECollectionNames.SERVICE_TYPE, exports.ServiceTypeSchema);
//# sourceMappingURL=ServiceType.schema.js.map