"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
// Representação de como um dado é composto dentro da aplicação
var Appointment = /** @class */ (function () {
    // passar params na criação de new Appointment()
    function Appointment(_a) {
        var provider = _a.provider, date = _a.date;
        this.id = uuidv4_1.uuid();
        this.provider = provider;
        this.date = date;
    }
    return Appointment;
}());
exports.default = Appointment;
