// Function to update scale and redraw the sun
function updateScaleAndDraw(elementId, sliderId, scaleElem, slider, drawFunction) {
    let scaleElement = document.getElementById(scaleElem);
    let sliderElement = document.getElementById(slider);

    sliderElement.addEventListener("input", function () {
        scaleElement.innerHTML = sliderElement.value;
        drawFunction();
    });
}

// Function to initialize sliders and draw the sun
function initializeSlidersAndDraw() {
    updateScaleAndDraw("xScale", "xSlider", "xScale", "xSlider", drawSun);
    updateScaleAndDraw("yScale", "ySlider", "yScale", "ySlider", drawSun);

    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    drawSun();

    // Draw sun function
    function drawSun() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.save();
        context.beginPath();
        context.translate(130, 30);
        context.translate(70, 70);
        context.scale(xSlider.value, ySlider.value);
        context.translate(-70, -70);

        for (let i = 0; i < 4; i++) {
            context.translate(70, 70);
            context.rotate(Math.PI / 8);
            context.translate(-70, -70);
            context.fillStyle = "orange";
            context.fillRect(20, 20, 100, 100);
        }

        context.arc(70, 70, 50, 0, 2 * Math.PI);
        context.fillStyle = "yellow";
        context.fill();
        context.restore();
    }
}

// Call the initialization function
initializeSlidersAndDraw();

 

 