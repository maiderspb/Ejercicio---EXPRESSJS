const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static("public"));

let products = {
  description: "Productos",
  items: [
    { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
    { id: 2, nombre: "FIFA 22 PS5", precio: 1000 },
    { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
    { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
    { id: 5, nombre: "Skin Valorant", precio: 120 },
    { id: 6, nombre: "Taza de Star Wars", precio: 220 },
  ],
};

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.items.push({ id: products.items.length + 1, ...newProduct });
  res.json({ message: "Producto agregado", product: newProduct });
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  const index = products.items.findIndex((prod) => prod.id == id);

  if (index !== -1) {
    products.items[index] = { id: Number(id), ...updatedProduct };
    res.json({
      message: "Producto actualizado",
      product: products.items[index],
    });
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  products.items = products.items.filter((prod) => prod.id != id);
  res.json({ message: `Producto con id ${id} eliminado` });
});

app.get("/products/filter/:price", (req, res) => {
  const { price } = req.params;
  const filtered = products.items.filter((prod) => prod.precio == price);
  res.json(filtered);
});

app.get("/products/price-range", (req, res) => {
  const filtered = products.items.filter(
    (prod) => prod.precio >= 50 && prod.precio <= 250
  );
  res.json(filtered);
});

app.get("/products/id/:id", (req, res) => {
  const { id } = req.params;
  const product = products.items.find((prod) => prod.id == id);
  product
    ? res.json(product)
    : res.status(404).json({ message: "Producto no encontrado" });
});

app.get("/products/name/:name", (req, res) => {
  const { name } = req.params;
  const product = products.items.find(
    (prod) => prod.nombre.toLowerCase() === name.toLowerCase()
  );
  product
    ? res.json(product)
    : res.status(404).json({ message: "Producto no encontrado" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
