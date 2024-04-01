// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type Message = {
  id: number;
  text: string;
  timestamp: string; // Você pode querer utilizar um tipo de data/hora mais específico aqui, dependendo do seu banco de dados e da linguagem de programação que está utilizando.
};

export type MessageTable = {
  id: number;
  text: string;
  timestamp: string;
};
