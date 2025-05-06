// ? function for numbers

function numbers() {
  let number = parseFloat(prompt("Enter a number:"));

  if (number < 5) {
    alert("Number is less than 5");
  } else {
    alert("Number is greater than or equal to 5");
  }
}

// const Message = document.getElementById("Message");

// Message.onclick = function () {
//   alert("Thank you!");
// };

// const elem = document.getElementById("elem");
// function handler1() {
//   alert("Thanks!");
// }

// function handler2() {
//   alert("Thanks again!");
// }

// elem.onclick = () => alert("Hello");
// elem.addEventListener("click", handler1);
// elem.addEventListener("click", handler2);


// 
document.getElementById('hider').onclick = function() {
    document.getElementById('text').hidden = true;
  }