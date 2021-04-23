import fastify from "fastify";
const app = fastify();

app.get("/", (req, res) => {
  res.send("Hello World from Docker");
});

app.listen(process.env.PORT || 80, "0.0.0.0");
