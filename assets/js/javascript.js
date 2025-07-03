const input = document.getElementById("amountInput");
const resultBox = document.getElementById("result").querySelectorAll("span")[1];

const POINT_RATE = 0.3;
const MAX_POINTS = 1500;
const MAX_AMOUNT = MAX_POINTS / POINT_RATE; // 5000円

input.addEventListener("input", () => {
  const amount = parseFloat(input.value);
  if (isNaN(amount) || amount < 0) {
    resultBox.textContent = "";
    return;
  }

  const points = Math.floor(amount * POINT_RATE);
  const remaining = Math.max(0, Math.ceil(MAX_AMOUNT - amount));

  let message = `→ ${points} pt`;

  if (remaining > 0) {
    message += `<br>あと ${remaining}円でMAX還元！`;
  } else {
    message += `　🎉 MAX還元達成！`;
  }

  resultBox.innerHTML = message;
});