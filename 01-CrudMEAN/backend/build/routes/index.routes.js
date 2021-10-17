"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config = () => {
            this.router.get('/', (req, res) => {
                return res.send('Hello');
            });
        };
        this.config();
    }
}
const IRoutes = new IndexRoutes();
exports.default = IRoutes.router;
