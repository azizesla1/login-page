document.addEventListener('DOMContentLoaded', () => {

    const loginContainer = document.querySelector('.login-container');
    if (loginContainer) {
            setTimeout(() => {
                    loginContainer.classList.add('loaded');
            }, 100);
    }

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
            button.addEventListener('click', function (e) {
                    const rect = button.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const diameter = Math.max(button.clientWidth, button.clientHeight);
                    const radius = diameter / 2;

                    const ripple = document.createElement('span');
                    ripple.style.width = ripple.style.height = `${diameter}px`;
                    ripple.style.left = `${x - radius}px`;
                    ripple.style.top = `${y - radius}px`;
                    ripple.classList.add('ripple');

                    const existingRipple = button.querySelector('.ripple');
                    if (existingRipple) {
                            existingRipple.remove();
                    }

                    button.appendChild(ripple);

                    setTimeout(() => {
                            ripple.remove();
                    }, 600);
            });
    });

});
