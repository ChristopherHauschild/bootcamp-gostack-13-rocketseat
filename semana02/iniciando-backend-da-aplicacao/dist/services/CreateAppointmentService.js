"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
/**
 * Dependency Inversion
 * DRY: Don't repeat Yourself
 */
var CreateAppointmentService = /** @class */ (function () {
    function CreateAppointmentService(appointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }
    CreateAppointmentService.prototype.execute = function (_a) {
        var date = _a.date, provider = _a.provider;
        var appointmentDate = date_fns_1.startOfHour(date);
        var findAppointmentInSameDate = this.appointmentsRepository.findByDate(appointmentDate);
        if (findAppointmentInSameDate) {
            throw Error("This appointment is already booked");
        }
        var appointment = this.appointmentsRepository.create({
            provider: provider,
            date: appointmentDate,
        });
        return appointment;
    };
    return CreateAppointmentService;
}());
exports.default = CreateAppointmentService;
