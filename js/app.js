function showLoader() {
  document.getElementById("loader").style.display = "flex";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

const btn = document.querySelector(".btn");
const wrapСard = document.querySelector(".wrap");
const url = "https://dog.ceo/api/breeds/image/random/20";

const fetchHandler = async () => {
  try {
    showLoader();
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);

    response.message.forEach((element) => {
      let newSrc = element;

      wrapСard.insertAdjacentHTML(
        "beforeend",
        `<div class= "wrap__card"><img src="${newSrc}" alt="Рандомная картинка" class="img"></div>`
      );
    });
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
};

btn.addEventListener("click", fetchHandler);
