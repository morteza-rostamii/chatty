"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import bodyParser from 'body-parser';
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)({
    //origin: 
    optionsSuccessStatus: 200,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ msg: 'Internal Server Error!' });
});
console.log('-ss');
app.get('*', (req, res) => {
    res.json({
        message: 'Catch all!',
    });
});
app.listen(PORT, () => {
    console.log(`running on: ${PORT}`);
});
