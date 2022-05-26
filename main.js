const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// API
const Contenedor = require("./class");
const container = new Contenedor("api");

// HANDLEBARS

/* app.engine(
	"hbs",
	engine({
		extname: ".hbs",
		defaultLayout: `${__dirname}/viewsHBS/index.hbs`,
		layoutsDir: `${__dirname}/viewsHBS/layouts`,
		partialsDir: `${__dirname}/viewsHBS/partials`,
	})
);
app.set("views", "./viewsHBS");
app.set("view engine", "hbs");

// metodos
app.get("/", (req, res) => {
	const data = {
		alumno: "Mauricio Crudo",
	};
	res.render("layouts/main", data);
});
app.get("/productos", async (req, res) => {
	const content = await container.getAll();
	const data = {
		content: content,
	};

	console.log(data);
	return res.render("layouts/items", data);
});
app.post("/productos", async (req, res) => {
	const items = await container.getAll();
	const id = items.length;
	let newItem = req.body;
	newItem.id = id;
	await container.save(newItem);
	return res.redirect("/productos");
}); */

// PUG

/* app.set("views", "./viewsPUG");
app.set("view engine", "pug");
// metodos
app.get("", (req, res) => {
	const data = {
		alumno: "Mauricio Crudo",
	};
	res.render("form", data);
});
app.get("/productos", async (req, res) => {
	const items = await container.getAll();
	const data = { alumno:'Mauricio Crudo', items: items };
	res.render("products", data);
});
app.post("/productos", async (req, res) => {
	console.log("recibido pedido post");
	const items = await container.getAll();
	const id = items.length + 1;
	let newItem = req.body;
	newItem.id = id;
	await container.save(newItem);
	return res.redirect("/productos");
}); */

// EJS

/* app.set("views", "./viewsEJS");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	let data = { alumno: "Mauricio Crudo" };
	return res.render("form", data);
});

app.get("/productos", async (req, res) => {
	let items = await container.getAll();
	let data = { alumno: "Mauricio Crudo", items: items };
	res.render("productos", data);
});

app.post("/productos", async (req, res) => {
	let items = await container.getAll();
	let id = items.length + 1;
	let newItem = req.body;
	newItem.id = id;
	await container.save(newItem);
	return res.redirect("/productos");
}); */

// PORT
app.use(express.static(__dirname + "/public"));
const PORT = 8080;
const server = app.listen(PORT, () => {
	console.log(`listen on ${PORT}`);
});
server.on("error", () => {
	console.log(error);
});
