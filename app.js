"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const parcel_bundler_1 = __importDefault(require("parcel-bundler"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const port = 3000;
const bundler = new parcel_bundler_1.default(path_1.default.join(__dirname, "../src/dist/index.html"));
app.use(bundler.middleware());
app.listen(port, () => console.log(`{rodando na porta http://localhost:${port}/)`));
