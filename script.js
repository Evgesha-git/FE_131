const slider = selector => {
    const sliders = document.querySelectorAll(selector);

    const sliderHandler = sliderContainer => {
        const slides = sliderContainer.querySelector('.slides');
        if (!slides) return;

        const slide = slides.querySelectorAll('.slide');
        if (!slide || !slide.length > 1) return;

        const buttons = sliderContainer.querySelectorAll('.button');
        if (!buttons || buttons.length < 2) return;

        const switchSlide = (event) => {
            const buf = event.target.classList.contains('next');
            console.log(buf);
            // console.log(slides.style.transform);
            let x = slides.style.transform || '0';
            // console.log(x);
            x = x.replace('translate(', '');
            // console.log(x);
            x = Math.abs(parseInt(x));

            if (buf) {
                if (x < (slide.length * 100) - 100) {
                    x += 100;
                } else {
                    x = 0;
                }
            } else {
                if (x > 0) {
                    x -= 100;
                } else {
                    x = (slide.length * 100) - 100;
                }
            }

            slides.style.transform = `translate(-${x}%)`;
        }

        [...buttons].forEach(button =>
            button.addEventListener('click', switchSlide)
        );
    }

    [...sliders].forEach(s => sliderHandler(s));
}

slider('.main__slider')