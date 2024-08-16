const products = JSON.parse(localStorage.getItem('products')) || [];
let editIndex = -1;

function saveProducts() {
  localStorage.setItem('products', JSON.stringify(products));
}

function displayProducts() {
  const productList = document.getElementById('products');
  productList.innerHTML = '';
  products.forEach((product, index) => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-details">
                        <h3>${product.title}</h3>
                        <p class="price">Price: $${product.price}</p>
                        <p class="category">Category: ${product.category}</p>
                    </div>
                    <div class="product-actions">
                        <button onclick="editProduct(${index})">Edit</button>
                        <button class="delete-button" onclick="deleteProduct(${index})">Delete</button>
                    </div>
                `;
    productList.appendChild(productElement);
  });
}

function addProduct() {
  const title = document.getElementById('product-title').value.trim();
  const price = document.getElementById('product-price').value.trim();
  const image = document.getElementById('product-image').value.trim();
  const category = document.getElementById('product-category').value.trim();

  if (title && price && category) {
    const newProduct = { title, price, image, category };

    if (editIndex >= 0) {
      products[editIndex] = newProduct;
      editIndex = -1;
      document.getElementById('add-product').innerText = 'Add Product';
    } else {
      products.push(newProduct);
    }

    saveProducts();
    displayProducts();
    clearForm();
  } else {
    alert(
      'Please fill in all the required fields: Title, Price, and Category.'
    );
  }
}

function editProduct(index) {
  const product = products[index];
  document.getElementById('product-title').value = product.title;
  document.getElementById('product-price').value = product.price;
  document.getElementById('product-image').value = product.image;
  document.getElementById('product-category').value = product.category;
  document.getElementById('add-product').innerText = 'Save Changes';
  editIndex = index;
}

function deleteProduct(index) {
  if (confirm('Are you sure you want to delete this product?')) {
    products.splice(index, 1);
    saveProducts();
    displayProducts();
  }
}

function clearForm() {
  document.getElementById('product-title').value = '';
  document.getElementById('product-price').value = '';
  document.getElementById('product-image').value = '';
  document.getElementById('product-category').value = '';
  document.getElementById('add-product').innerText = 'Add Product';
}

document.getElementById('add-product').addEventListener('click', addProduct);

displayProducts();
