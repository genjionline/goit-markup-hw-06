// document.addEventListener('DOMContentLoaded', function () {
//     const modalWindow = document.querySelector('.backdrop');
//     const modalButton = document.querySelector('.solutions-order');
//     const closeButton = document.querySelector('.modal-button');

//   modalButton.addEventListener('click', function (event) {
//     event.preventDefault();
    
//         // Show the modal
//         modalWindow.classList.remove('is-hidden');
//     });

//     closeButton.addEventListener('click', function () {
//         // Hide the modal
//         modalWindow.classList.add('is-hidden');
//     });
// });



// mobileMenu

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const burgerButton = document.querySelector('.open-mobile-menu');
    const closeButton = document.querySelector('.mobile-close-button');

    burgerButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Show the mobile menu
        mobileMenu.classList.remove('is-hidden');
    });

    closeButton.addEventListener('click', function () {
        // Hide the mobile menu
        mobileMenu.classList.add('is-hidden');
    });
});


// modal

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired');

    const modalBackdrop = document.querySelector('.backdrop');
    const solutionsOrderButton = document.querySelector('.solutions-order');
    const modalCloseButton = document.querySelector('.modal-button');

    console.log('modalBackdrop:', modalBackdrop);
    console.log('solutionsOrderButton:', solutionsOrderButton);
    console.log('modalCloseButton:', modalCloseButton);

    solutionsOrderButton.addEventListener('click', function () {

        // Directly set styles to show the modal
        modalBackdrop.style.opacity = 1;
        modalBackdrop.style.visibility = 'visible';
        modalBackdrop.style.pointerEvents = 'auto';
    });

    modalCloseButton.addEventListener('click', function () {

        // Directly set styles to hide the modal
        modalBackdrop.style.opacity = 0;
        modalBackdrop.style.visibility = 'hidden';
        modalBackdrop.style.pointerEvents = 'none';
    });
});
