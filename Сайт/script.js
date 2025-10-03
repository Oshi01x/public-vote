let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("cart-total").textContent = total + "₸";

  updateCartList();
}

function updateCartList() {
  const list = document.getElementById("cart-list");
  list.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — ${item.price}₸`;
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Удалить";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);

  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("cart-total").textContent = total + "₸";

  updateCartList();
}