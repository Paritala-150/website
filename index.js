function handleSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thanks for your message, ${email}!\nWe'll get back to you soon.`);
    document.getElementById('contactForm').reset();  // Reset form fields
}

function openModal(imgElement) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
    const modal = document.getElementById("imgModal");
    modal.style.display = "none";
}
