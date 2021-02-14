window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dots');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let sliderIndex = 1;

   

    function showSlides(n) {
        if (n > slides.length) { //если н больше длины слайдов, возвращаем к 1 слайду
            sliderIndex = 1;
        } 
        if (n < 1) { //если меньше 1, то числу слайда 
            sliderIndex = slides.length;
        }

        slides.forEach(elem => {  //скрываем все элементы
            elem.style.display = 'none';
        });

        dots.forEach(elem => { //убираем класс активности со всех точек
            elem.classList.remove('active');
        }); 

        slides[sliderIndex -1].style.display = 'block'; //добавляем видимость текущему слайду

        dots[sliderIndex - 1].classList.add('active'); //добавляем класс активности текущей точке
    }    
    
    next.addEventListener('click', (e) => { //нажимаем на стрелку и вызываем функцию с увеличением на 1
        e.preventDefault();
        showSlides(sliderIndex += 1);
    });

    prev.addEventListener('click', (e) => { //нажимаем на прев и вызываем функцию с уменьшением на 1
        e.preventDefault();
        showSlides(sliderIndex -= 1);
    });

    showSlides(sliderIndex); // текущий слайд 
    
});