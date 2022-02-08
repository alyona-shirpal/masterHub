"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterModel = exports.MasterSchema = void 0;
const mongoose_1 = require("mongoose");
const enum_1 = require("../enum");
exports.MasterSchema = new mongoose_1.Schema({
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
        lowercase: true,
        default: ''
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
    },
    services: {
        type: [mongoose_1.Types.ObjectId],
        default: [],
        index: true,
        ref: enum_1.ECollectionNames.SERVICE
    },
    skills: {
        type: [mongoose_1.Types.ObjectId],
        default: [],
        index: true,
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
exports.MasterModel = (0, mongoose_1.model)(enum_1.ECollectionNames.MASTER, exports.MasterSchema);
//# sourceMappingURL=Master.schema.js.map