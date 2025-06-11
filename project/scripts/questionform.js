document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default submit for now

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Save to local storage
    localStorage.setItem("visitorName", name);
    localStorage.setItem("visitorEmail", email);

    // Redirect to thank-you page
    window.location.href = "questionform.html";
  });
});
