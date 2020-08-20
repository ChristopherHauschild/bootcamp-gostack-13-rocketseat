import { Request, Response } from "express";
import createUser from "./services/CreateUser";

// string, number, boolean, object, Array
// interfaces > tipagem de conjuntos de dados

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
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
