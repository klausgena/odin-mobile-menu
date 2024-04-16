const actions = document.getElementById("actions");
const menuButton = document.getElementById("menu-button");

let flag = true;

function showEl(el) {
  el.removeAttribute("style");
  el.style.animation = "fadeIn 0.3s";
}

function hideEl(el) {
  el.removeAttribute("style");
  el.setAttribute("style", "animation: fadeOut 0.5s; visibility: hidden;");
}

function toggleStyle() {
  if (flag) {
    showEl(actions);
    flag = false;
    return;
  }
  hideEl(actions);
  flag = true;
  return;
}

function showToolTip() {
  console.log("mouseover");
}

actions.setAttribute("style", "display:none");
actions.addEventListener("mouseover", showToolTip);
menuButton.addEventListener("click", toggleStyle);
