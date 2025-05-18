const API_URL = "/products";
const productList = document.getElementById("product-list");
const addForm = document.getElementById("add-product-form");

const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    productList.innerHTML = "";
    response.data.items.forEach((product) => {
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        <span><strong>${product.nombre}</strong> - $${product.precio}</span>
        <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">Eliminar</button>
      `;
      productList.appendChild(li);
    });
  } catch (error) {
    console.error("Error al cargar productos:", error);
  }
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    fetchProducts();
  } catch (error) {
    console.error("Error al eliminar:", error);
  }
};

addForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);
  try {
    await axios.post(API_URL, { nombre, precio });
    addForm.reset();
    fetchProducts();
    const tab = new bootstrap.Tab(document.querySelector("#productos-tab"));
    tab.show();
  } catch (error) {
    console.error("Error al añadir:", error);
  }
});

fetchProducts();
