document.addEventListener("DOMContentLoaded", () => {
    // Pull different images
    const images = document.querySelectorAll("img");
    
    // Loop through the images and fetch recipe images
    images.forEach(image => {
        fetch("https://api.example.com/recipe/random") // Replace with your actual recipe image API
            .then(response => response.json())
            .then(data => {
                image.src = data.image; // Adjust according to your API response
                image.width = 100;
                image.height = 100;
            })
            .catch(error => {
                console.error("Error fetching recipe image:", error);
            });
    });
});
