import Appointment from "../models/Appointment";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date }, // encontra campo date com valor igual a date
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
