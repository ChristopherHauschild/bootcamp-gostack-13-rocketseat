import { uuid } from "uuidv4";

// Representação de como um dado é composto dentro da aplicação

class Appointment {
  id: string;

  provider: string;

  date: Date;

  // passar params na criação de new Appointment()
  constructor({ provider, date }: Omit<Appointment, "id">) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
