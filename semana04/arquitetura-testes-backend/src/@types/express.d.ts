declare namespace Express {
  // anexa ao Request
  export interface Request {
    user: {
      id: string;
    };
  }
}
