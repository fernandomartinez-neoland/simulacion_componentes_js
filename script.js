const Jlink = document.getElementById("jose_link");
const Klink = document.getElementById("kalef_link");
const jose_div = document.getElementById("jose");
const kaleff_div = document.getElementById("kaleff");

Jlink.addEventListener("click", () => {
  jose_div.style.display = "block";
  kaleff_div.style.display = "none";
});

Klink.addEventListener("click", () => {
  jose_div.style.display = "none";
  kaleff_div.style.display = "block";
});
