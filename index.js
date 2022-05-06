// Menu
((d) => {
  const $btnMenu = d.querySelector(".menu-btn");
  const $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", () => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

// Contact form
((d) => {
  const $form = d.querySelector(".contact__form");
  const $loader = d.querySelector(".contact-form-loader");
  const $response = d.querySelector(".contact__form__response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    $loader.classList.remove("display-none");

    fetch("https://formsubmit.co/ajax/faniel5431@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch(err => {
        console.error(err);
        let message = err.statusText ?? "Ocurrió un error al enviar, intenta nuevamente."
        $response.querySelector('h3').innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("display-none");
        setTimeout(() => {
          location.hash = "#cerrar";
        }, 3000);
      })
  });
})(document);
