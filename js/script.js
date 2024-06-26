document.body.onclick = () => {
  document.body
    .querySelectorAll("details[open]")
    .forEach((e) => (e.open = false));
};

(function () {
  var square = document.querySelector(".FAQ__TITLE");

  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      var entrySquare = entry.target.querySelector(".FAQ__text");
      if (
        typeof getCurrentAnimationPreference === "function" &&
        !getCurrentAnimationPreference()
      ) {
        return;
      }

      if (entry.isIntersecting) {
        entrySquare.classList.add("size-up__animation");
        return;
      }

      entrySquare.classList.remove("size-up__animation");
    });
  });

  observer.observe(square);
})();
