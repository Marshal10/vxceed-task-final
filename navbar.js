const navbar = document.getElementById("navbar");

const sticky = navbar.offsetTop;

const handleSticky = () => {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

window.addEventListener("scroll", handleSticky);
