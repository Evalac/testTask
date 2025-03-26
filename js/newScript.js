const btnSumbit = document.querySelector("#submit_form");
const formSubmit = document.querySelector("#form_user");
const phoneInput = document.querySelector("#user_phone");

const linkBtn = document.querySelector("#header-produto");
const formConteiner = document.querySelector(".form_container");
const loginClick = document.querySelector("#boxComentarios");
const menuContainer = document.querySelector("#menu-container");

const loginBtn = document.querySelector("#submit_form");

loginClick.style.pointerEvents = "none";
menuContainer.pointerEvents = "none";

const refs = [
  document.querySelector("#header-produto"),
  document.querySelector("#boxComentarios"),
  document.querySelector("#next-article"),
  document.querySelector(".feed"),
  document.querySelector(".footer"),
  document.querySelector("#menu-container"),
  document.querySelector("#mais-lidas"),
];

btnSumbit.addEventListener("click", onSubmit);
formSubmit.addEventListener("keydown", onChange);

refs.map((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");

    formConteiner.scrollIntoView({ block: "center", behavior: "smooth" });
  });
});

const userInfo = {
  name: "",
  lasName: "",
  email: "",
  phoneNumber: "",
};

function onSubmit() {
  e.preventDefault();
  const { name, lasName, email, phoneNumber } = userInfo;
  if (name || lasName || email || phoneNumber === "") {
    return;
  }

  userInfo.email = "";
  userInfo.name = "";
  userInfo.lasName = "";
  userInfo.phoneNumber = "";

  formSubmit.reset();
  window.location.href = "/testTask/thanks.html";
}

function onChange(e) {
  if (e.target.id === "user_name") {
    userInfo.name = e.target.value;
  }
  if (e.target.id === "user_last_name") {
    userInfo.lasName = e.target.value;
  }
  if (e.target.id === "user_email") {
    userInfo.email = e.target.value;
  }
  if (e.target.id === "user_phone") {
    userInfo.phoneNumber = e.target.value;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.querySelector("#user_phone");

  if (!phoneInput) {
    console.error("Phone input field not found!");
    return;
  }

  window.intlTelInput(phoneInput, {
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/js/utils.js",
    initialCountry: "br",
    separateDialCode: true,
  });
});
