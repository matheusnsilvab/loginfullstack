const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/login", (req, res) => {
  const username = req.query.username;
  return res.render("login", { username: username });
});

app.get('/welcome', (req, res) => {
  const username = req.query.username;
  res.render('welcome', { username: username });
});

app.post("/signup", (req, res) => {
  const { username, password, ConfiPass } = req.body;
  
  if (password !== ConfiPass) {
    return res
      .status(400)
      .send("As senhas não são iguais. Por favor, tente novamente.");
  }
  return res.redirect(`/login?username=${username}`);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  res.redirect(`/welcome?username=${username}`);
});


app.listen(port, () => {
  console.log(`Servidor ativo em http://localhost:${port}/signup`);
});
