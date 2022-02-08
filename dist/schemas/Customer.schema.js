"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = exports.CustomerSchema = void 0;
const mongoose_1 = require("mongoose");
const enum_1 = require("../enum");
exports.CustomerSchema = new mongoose_1.Schema({
    firstName: {
        type: 'string',
        required: true,
        trim: true,
        lowercase: true
    },
    lastName: {
        type: 'string',
        required: false,
        trim: true,
        lowercase: true
    },
    password: {
        type: 'string',
        required: true,
        trim: true
    },
    phone: {
        type: 'string',
        required: true,
        trim: true
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
exports.CustomerModel = (0, mongoose_1.model)(enum_1.ECollectionNames.CUSTOMER, exports.CustomerSchema);
//# sourceMappingURL=Customer.schema.js.map