balloon = document.getElementById("balloon")
increment = 5
window.addEventListener("keydown", event => {
  currentFontSize = window.getComputedStyle(balloon).getPropertyValue("font-size")
  currentFontSizeInt = parseInt(currentFontSize.slice(0, -2))
  if (event.key === "ArrowUp" && currentFontSizeInt < 50) {
    balloon.style.fontSize = `${currentFontSizeInt + increment}px`;
  }
  else if (event.key === "ArrowUp" && currentFontSizeInt > 50) {
      balloon.textContent = "boom!";
      window.removeEventListener("keydown", event);
  }
});
window.addEventListener("keydown", event => {
  currentFontSize = window.getComputedStyle(balloon).getPropertyValue("font-size")
  currentFontSizeInt = parseInt(currentFontSize.slice(0, -2))
  if (event.key === "ArrowDown" && currentFontSizeInt < 50) {
    balloon.style.fontSize = `${currentFontSizeInt - increment}px`;
  }
});


