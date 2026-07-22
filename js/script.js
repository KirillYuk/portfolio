const links = document.querySelectorAll(".navigation a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href");
    const section = document.querySelector(id);

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const title = entry.target.querySelector(".section-title");

          title.classList.add("highlight-title");

          title.addEventListener(
            "animationend",
            () => {
              title.classList.remove("highlight-title");
            },
            { once: true },
          );

          observer.disconnect();
        });
      },
      {
        threshold: 1,
      },
    );

    observer.observe(section);
  });
});
