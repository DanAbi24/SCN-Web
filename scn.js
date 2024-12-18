    function show()  {
        document.getElementById("sidebar").classlist.toggle("active");
    }


                const dropdownButtons = document.querySelectorAll('.dropdown-btn');

                
                dropdownButtons.forEach(button => {
                    button.addEventListener('mouseenter', function() {
                        button.nextElementSibling.style.display = 'block';
                    });
                    button.addEventListener('mouseleave', function() {
                        button.nextElementSibling.style.display = 'none';
                    });
                });
        
        

        const slides = document.querySelectorAll(".slides img");
        let slideIndex = 0;
        let intervalId = null;
 
        intializeSlider();

        function intializeSlider() {

            if(slides.length > 0) {
            slides[slideIndex].classList.add("displaySlide");
            intervalId = setInterval(nextSlide, 5000);
            }
        } 

        function showSlide(index) {
            if(index >= slides.length) {
                slideIndex = 0;
            }
            else if (index < 0){
                slideIndex = slides.length - 1;
            }

            slides.forEach(slide => {
                slide.classList.remove("displaySlide");
            });
            slides[slideIndex].classList.add("displaySlide");
           
        }

        function prevSlide() {
                slideIndex--;
                showSlide(slideIndex);
        }

        function nextSlide() {
                slideIndex++;
                showSlide(slideIndex);
        }


       

        