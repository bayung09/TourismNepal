function closeModal() {
    var modal = document.getElementById("fullScreenModal");
    modal.style.display = "none";
}

function openModal(imageUrl) {
    var modal = document.getElementById("fullScreenModal");
    var modalImg = document.getElementById("fullScreenImage");
    modal.style.display = "block";
    modalImg.src = imageUrl;
}