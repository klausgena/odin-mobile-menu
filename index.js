const actions = document.getElementById("actions");
const menuButton = document.getElementById("menu-button");
const roundButtons = document.getElementsByClassName("round-button");
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

function showToolTip(event) {
  const target = event.target;
  if (target.className === "round-button") {
    const toolTipSpan = target.nextElementSibling;
    toolTipSpan.style.display = "block";
  }
}

function hideToolTip(event) {
  const toolTips = document.getElementsByClassName("tooltip");
  Array.from(toolTips).forEach((tooltip) => {
    tooltip.style.display = "none";
  });
}

actions.setAttribute("style", "display:none");
actions.addEventListener("mouseover", showToolTip);
Array.from(roundButtons).forEach((button) => {
  button.addEventListener("mouseleave", hideToolTip);
});
menuButton.addEventListener("click", toggleStyle);
