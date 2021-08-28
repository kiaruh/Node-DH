let slides = document.querySelectorAll('.slide-container');

let arrows = document.querySelectorAll('.arrow');

let dots = document.querySelectorAll('.dot')

​

// Step Two: Converting Elements to Arrays

slides = Array.from(slides); // Convert a Array

arrows = Array.from(arrows); // Convert a Array

dots = Array.from(dots); // Convert a Array

​

console.log("slides",slides);

console.log("arrows",arrows);

console.log("dots",dots);

​

const showSlide =  (numSlide) => {

    // Step Three: Showing the Slide

    slides.forEach(slide => slide.classList.remove("active"));

    slides.find(slide => slide.dataset.slide == numSlide).classList.add("active");

    // Step Four : Showing the Dot

    dots.forEach(dot => dot.classList.remove("active"));

    dots.find(dot => dot.dataset.target == numSlide).classList.add("active");

    

    // Step Five: Modifying the Arrow

    let arrowRight = arrows.find(arrow => arrow.dataset.next != null)

    let arrowLeft = arrows.find(arrow => arrow.dataset.preview != null)

    let lastSlide = slides.length - 1 ;

    arrowLeft.setAttribute("data-preview", parseInt(numSlide) <= 0 ? lastSlide : parseInt(numSlide) - 1)

    arrowRight.setAttribute("data-next", parseInt(numSlide) >= lastSlide ? 0 : parseInt(numSlide) + 1)

}

​

​

​

// Step Two : Add Event Listener to arrows

arrows.forEach(arrow => arrow.addEventListener("click",function(e) {

    e.preventDefault();

    let target = e.target;

    let data = target.dataset;

    if(data.next != null) {

        showSlide(data.next);

    }else if(data.preview != null) {

        showSlide(data.preview);

    }

}))

​

// Step FInal

​

showSlide(0);

​

// Step Final Alternative

setInterval(() => arrows.find(arrow => arrow.dataset.next != null).click(), 1000 * 5);