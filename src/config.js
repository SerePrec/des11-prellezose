import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  PORT: process.env.PORT || 8080,
  mariaDb: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "ecommerce",
      charset: "utf8mb4"
    }
  },
  mariaDbHeroku: {
    client: "mysql",
    connection: {
      host: "us-cdbr-east-05.cleardb.net",
      user: "b7fcb0328e2d0f",
      password: "bc06f24d",
      database: "heroku_b601d9fca46901d",
      charset: "utf8mb4"
    }
  },
  sqlite3: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "..", "DB", "ecommerce.sqlite")
    },
    useNullAsDefault: true
  }
};

export default config;
