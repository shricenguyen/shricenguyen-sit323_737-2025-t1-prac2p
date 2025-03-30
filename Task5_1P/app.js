function addTwoNumbers() {
  const a = document.getElementById("firstNumber").value;
  const b = document.getElementById("secondNumber").value;

  if (isNaN(a) || isNaN(b)) {
    alert("Please enter a number");
    return;
  }

  fetch(`http://localhost:3000/addTwoNumbers?a=${a}&b=${b}`)
    .then((res) => res.json())
    .then((data) => {
      const result = document.getElementById("result");
      result.innerHTML = `Result: ${data.data}`;
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong. Please try again later.");
    });
}
