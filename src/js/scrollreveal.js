// scrollreveal
// Version: 4


ScrollReveal({
    reset: true,
    duration: 1000,
    delay: 200,
    distance: '10px',
});

ScrollReveal().reveal('.about');
ScrollReveal().reveal('.focus--mask', { delay: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('.about-teks' , {delay: 500, easing: 'ease'});
ScrollReveal().reveal('.row-teks h2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.row-teks header', { delay: 800, origin: 'right' });
ScrollReveal().reveal('.row-teks h5', { delay: 1000, opacity: 0 });
ScrollReveal().reveal('.btn', { delay: 1500, opacity: 0 });
ScrollReveal().reveal('.side .side-img img', { delay: 1200, opacity: 0 });
ScrollReveal().reveal('.content-teks', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.content-card', { delay: 1000 });
ScrollReveal().reveal('.content-card .card-1', { delay: 500, origin: 'left', duration: 1500 });
ScrollReveal().reveal('.content-card  h2', { delay: 1000 });
ScrollReveal().reveal('.content-card  p', { delay: 1100 });
ScrollReveal().reveal('.content-card  img', { delay: 1200 });
ScrollReveal().reveal('.content-card   a', { delay: 1000 });

ScrollReveal().reveal('.content-card .card-2', { delay: 500, origin: 'right', duration: 1500 });
ScrollReveal().reveal('.content-card .card-3', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.content-card .card-4', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.content-card .card-5', { delay: 500, origin: 'left'});
ScrollReveal().reveal('.content-card .card-6', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.content-card .card-7', { delay: 500, origin: 'bottom' });

ScrollReveal().reveal('.footer .footer-teks', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.footer .footer-teks h1', { delay: 700, viewFactor: 0.5 });
ScrollReveal().reveal('.footer .footer-teks p', { delay: 1000, origin: 'bottom' });
ScrollReveal().reveal('.footer .footer-link', { delay: 1200, origin: 'left' });
ScrollReveal().reveal('.footer .footer-contact', { delay: 1400, origin: 'right' });