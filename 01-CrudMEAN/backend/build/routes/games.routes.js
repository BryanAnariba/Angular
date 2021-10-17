"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            return res.json('Games');
        });
    }
}
const GameRoutes = new GamesRoutes();
exports.default = GameRoutes.router;
