const p = document.querySelectorAll(".p");
const play = document.querySelector(".biru");
const next = document.querySelector(".ijo");
const audio1 = new Audio("letme.3gp");

p.forEach(function (e) {
  e.addEventListener("click", function () {
    alert("bukan yang ini tapi yang onooo");
  });
});

// tombol
play.addEventListener("click", function () {
  audio1.play();
  setTimeout(() => {
    next.style.display = "block";
    next.style.textAlign = "center";
  }, 8000);
});
