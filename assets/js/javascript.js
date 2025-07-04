// 還元率と金額の入力要素を取得
const rateInput = document.getElementById("rateInput");
const amountInput = document.getElementById("amountInput");
const resultSpan = document.getElementById("result").querySelectorAll("span")[1];

const MAX_POINTS = 1500;

// 再計算処理
function calculatePoints() {
  const rate = parseFloat(rateInput.value) / 100;
  const amount = parseFloat(amountInput.value);

  if (isNaN(rate) || isNaN(amount) || rate <= 0 || amount < 0) {
    resultSpan.innerHTML = "";
    return;
  }

  const maxAmount = MAX_POINTS / rate;
  const points = Math.floor(amount * rate);
  const remaining = Math.max(0, Math.ceil(maxAmount - amount));

  let message = `→ ${points} pt`;

  if (remaining > 0) {
    message += `<br>あと ${remaining}円でMAX還元！`;
  } else {
    message += `　🎉 MAX還元達成！`;
  }

  resultSpan.innerHTML = message;
}

// 入力が変更されるたびに再計算
rateInput.addEventListener("input", calculatePoints);
amountInput.addEventListener("input", calculatePoints);
