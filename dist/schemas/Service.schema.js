"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceModel = exports.ServiceSchema = void 0;
const mongoose_1 = require("mongoose");
const enum_1 = require("../enum");
exports.ServiceSchema = new mongoose_1.Schema({
    title: {
        type: 'string',
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    type: {
        type: [mongoose_1.Types.ObjectId],
        default: [],
        ref: enum_1.ECollectionNames.SERVICE_TYPE
    }
}, {
    id: false,
    autoCreate: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.ServiceModel = (0, mongoose_1.model)(enum_1.ECollectionNames.SERVICE, exports.ServiceSchema);
//# sourceMappingURL=Service.schema.js.map