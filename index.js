document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;

    new InstagramFeed({
      username,
      container: document.getElementById("instagram-feed"),
      display_profile: true,
      display_biography: true,
      display_gallery: true,
      callback: null,
      styling: true,
      items: 9,
      items_per_row: 3,
      margin: 1.5,
      lazy_load: true,
      on_error: console.error,
    });
  });
});
