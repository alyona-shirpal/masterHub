"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    PORT: process.env.PORT || 5000,
    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'https://localhost:5000',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/masterHub'
};
//# sourceMappingURL=config.js.map