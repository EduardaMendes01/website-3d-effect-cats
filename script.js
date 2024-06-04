const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
 yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallax_el.forEach((el) => {
        /*Horizontal*/
        let speedx = el.dataset.speedx;
        /*Vestical*/
        let speedy = el.dataset.speedy;
        /*Depth */
        let speedz = el.dataset.speedz;

        let isInLeft =
            parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

        let zValue = e.clientX - parseFloat(getComputedStyle(el).left) * isInLeft * 0.01;
            
        el.style.transform = `translateX(calc(-50% + ${
            -xValue * speedx
        }px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(5000px) translateZ(${zValue * speedz}px)`;
    });
});