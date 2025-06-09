// scripts/form.js
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("productName");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  // Set current year and last modified in footer
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});
