const cf = require("./wse-express/index");
const app = new cf();

app.get("/", async (req, res) => {
 return res.json({
   status: "Running",
   created: "Kenneth Perez"
 });
});

addEventListener('fetch', async(event) => {
  event.respondWith(app.handleRequest(event));
});
