window.onload = function() {
    var attractions = document.querySelectorAll('.attractions');
    attractions.forEach(function(attraction) {
        attraction.style.display = 'none';
    });
};
    function toggleAttractions(btn) {
        var attractions = btn.parentNode.nextElementSibling;

        if (attractions.style.display === "none" || attractions.style.display === "") {
            attractions.style.display = "block";
            btn.innerText= "Hide";
        } else {
            attractions.style.display = "none";
            btn.innerText = "Learn More";
        }
    }