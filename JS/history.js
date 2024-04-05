/*function to display the images description section*/
function toggleDescription(id) {
    var description = document.getElementById(id);
    if (description.style.display === "block") {
        description.style.display = "none";
    } else {
        description.style.display = "block";
    }
}
/*full screen image display javascript function*/
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