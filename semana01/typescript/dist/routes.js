"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
// string, number, boolean, object, Array
// interfaces > tipagem de conjuntos de dados
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        email: "christopher@email.com",
        password: "senha123",
        techs: [
            "Node.js",
            "React.js",
            "React Native",
            { title: "JS", experience: 100 },
        ],
    });
    return response.json({ message: "Hello TS!", user: user });
}
exports.helloWorld = helloWorld;
