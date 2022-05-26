window.onload = function () {
  const openButton = document.querySelector(".open-button");
  const closeButton = document.querySelectorAll(".close-button");
  const modalWarning = document.getElementById("warning-container");

  openButton.addEventListener("click", handleModals);
  closeButton.forEach(function (e) {
    e.addEventListener("click", handleModals);
  });

  function handleModals(e) {
    if (e.classList.contains("open-warning")) {
      modalWarning.classList.toggle("modal-active");
    }
  }
};
