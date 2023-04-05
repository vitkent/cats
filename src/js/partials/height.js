(function () {
    const buttons = document.querySelectorAll('.b-card__btn');

    // устанавливает высоту при загрузке страницы
    if (window.innerWidth >= 768) {
        let height = 0;

        for (let i = 0; i < buttons.length; ++i) {
            if (buttons[i].offsetHeight > height) {
                height = buttons[i].offsetHeight;
            }
        }

        for (let i = 0; i < buttons.length; ++i) {
            buttons[i].style.height = `${height}px`;
        }
    } else  {
        for (let i = 0; i < buttons.length; ++i) {
            buttons[i].style.height = 'auto';
        }
    }

    // высчитываем высоту при ресайзе страницы
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            (function() {
                let currentHeight = 0;
                for (let i = 0; i < buttons.length; ++i) {
                    buttons[i].style.height = 'auto';
                    if (buttons[i].offsetHeight > currentHeight) {
                        currentHeight = buttons[i].offsetHeight;
                    }
                }
                for (let i = 0; i < buttons.length; ++i) {
                    buttons[i].style.height = `${currentHeight}px`;
                }
            })();
        } else {
            for (let i = 0; i < buttons.length; ++i) {
                buttons[i].style.height = 'auto';
            }
        }
    })

})();