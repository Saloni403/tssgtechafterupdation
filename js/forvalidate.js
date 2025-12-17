const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!name || !email || !phone || !message) {
    return Swal.fire("Missing Fields", "All fields are required.", "warning");
  }

  if (!emailRegex.test(email)) {
    return Swal.fire(
      "Invalid Email",
      "Please enter a valid email address.",
      "error"
    );
  }

  if (!phoneRegex.test(phone)) {
    return Swal.fire(
      "Invalid Phone",
      "Enter a valid 10-digit Indian number.",
      "error"
    );
  }

  const formData = new FormData(form);
  const json = JSON.stringify(Object.fromEntries(formData.entries()));

  Swal.fire({
    title: "Sending...",
    text: "Please wait while we submit your form.",
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
  });

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const data = await res.json();

    if (data.success) {
      Swal.fire("Success", "Your message has been sent!", "success");
      form.reset();
    } else {
      Swal.fire("Error", data.message || "Something went wrong!", "error");
    }
  } catch (error) {
    Swal.fire("Error", "Network or server error occurred!", "error");
    console.error(error);
  }
});
