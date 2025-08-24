function updatemenu() {
  if (document.getElementById("responsive-menu").checked == true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
  } else {
    document.getElementById("menu").style.borderRadius = "0px";
  }
}

function copyright() {
  const date = document.getElementById("date");
  const year = new Date();

  if (date) {
    date.innerHTML = year.getFullYear();
  }
}

window.onload = () => {
  copyright();
};
