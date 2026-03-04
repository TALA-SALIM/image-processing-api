"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageControllers_1 = __importDefault(require("../controllers/imageControllers"));
var router = express_1.default.Router();
router.get("/", imageControllers_1.default);
exports.default = router;
//# sourceMappingURL=images.js.map