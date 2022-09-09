const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults();

server.use(middlewares);

const port = +process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

server.use(router);
server.listen(port, host, () => {
  console.log(process.env);
  console.log(`JSON Server is running on ${host}:${port}`);
});
