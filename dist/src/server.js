"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./routes/images"));
var app = (0, express_1.default)();
var port = 8000;
app.use('/api/images', images_1.default);
app.get('/', function (req, res) {
    res.send('Image Processing Project (API) is running !');
});
app.listen(port, function () {
    console.log("Server running on http://localhost:".concat(port));
});
exports.default = app;
//# sourceMappingURL=server.js.map