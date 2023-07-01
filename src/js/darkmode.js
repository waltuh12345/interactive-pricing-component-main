const darkModeToggle = document
  .querySelector("#darkmode-toggle")
  .querySelector("i");

const root = document.documentElement;

darkModeToggle.addEventListener("click", (e) => {
  const target = e.target;
  const wrapper = target.closest("button");

  wrapper.classList.toggle("active");

  const setColor = (property, hex) => root.style.setProperty(property, hex);

  if (wrapper.classList.contains("active")) {
    setColor("--bg", "#ffffff");
    setColor("--onBg", "#121212");
    setColor("--clr-primary", "#47B5FF");
    setColor("--clr-neutral", "#f44336");
  } else {
    setColor("--bg", "#121212");
    setColor("--onBg", "#ffffff");
    setColor("--clr-primary", "#75e2d4");
    setColor("--clr-neutral", "#ef9a9a");
  }
});
