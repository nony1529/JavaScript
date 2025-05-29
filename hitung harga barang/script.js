const qtyInput = document.getElementById('qty');
const priceInput = document.getElementById('price');
const discountInput = document.getElementById('discount');
const totalSpan = document.getElementById('total');

function calculateTotal() {
  const qty = qtyInput.value;
  const price = parseInt(priceInput.value.replace(",",""));
  const discount = parseInt(discountInput.value.replace(",",""));
  const total = qty * price - discount;

  totalSpan.innerHTML = `Rp ${total.toLocaleString("id")}`;
}
qtyInput.addEventListener("input", calculateTotal);
priceInput.addEventListener("input", calculateTotal);
discountInput.addEventListener("input", calculateTotal);
calculateTotal();