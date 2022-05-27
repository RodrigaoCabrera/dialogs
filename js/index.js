window.onload = function () {
  const openButton = document.querySelectorAll(".open-button");
  const closeButton = document.querySelectorAll(".close-button");
  const modalWarning = document.getElementById("warning-container");
  const modalSuccess = document.getElementById("success-container");

  openButton.forEach(function (e) {
    e.addEventListener("click", () => handleModals(e));
  });
  closeButton.forEach(function (e) {
    e.addEventListener("click", () => handleModals(e));
  });

  function handleModals(e) {
    if (e.classList.contains("open-warning")) {
      modalWarning.classList.toggle("modal-active");
      modalSuccess.classList.remove("modal-active");
    }
    else if (e.classList.contains("open-success")) {
      modalSuccess.classList.toggle("modal-active");
      modalWarning.classList.remove("modal-active");
    } else {
      modalWarning.classList.remove("modal-active");
      modalSuccess.classList.remove("modal-active");
    }
  }
};