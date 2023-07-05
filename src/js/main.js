const button = document.getElementById("toggleButton");
let container = document.querySelector(".container");
let isVisible = false;
let popover = null;

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isVisible) {
    createPopover();
  } else {
    removePopover();
  }
});

function createPopover() {
  popover = document.createElement("div");
  popover.classList.add("popover");
  popover.innerHTML = `
    <div class="popover-title"><p>Popover Title</p></div>
    <div class="popover-content"><p>And here's some amazing content. It's very engaging. Right?</p></div>
  `;
  container.appendChild(popover);
  calculatePopoverPosition();
  isVisible = true;
}

function removePopover() {
  popover.remove();
  isVisible = false;
}

function calculatePopoverPosition() {
  const buttonRect = button.getBoundingClientRect();
  const popoverWidth = popover.offsetWidth;
  const popoverHeight = popover.offsetHeight;
  console.log("popoverheight: " + popoverHeight);
  const popoverTop = buttonRect.top - popoverHeight - 10; // регулировка для отступа вверх от кнопки
  const popoverLeft = buttonRect.left + buttonRect.width / 2 - popoverWidth / 2;

  popover.style.top = popoverTop + "px";
  popover.style.left = popoverLeft + "px";
}
