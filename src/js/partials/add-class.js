(function () {
    const buttons = document.querySelectorAll('.b-card__btn');
    const buttonsText = document.querySelectorAll('.b-card__text-btn');

    for (let i = 0; i < buttons.length; ++i) {
        buttons[i].addEventListener('click', function () {
            buttons[i].closest('.b-card').classList.toggle('selected');
            buttons[i].querySelector('.b-card__note').textContent = 'Сказочное заморское яство';
            buttons[i].querySelector('.b-card__note').style.color = '#666666';
        })

        buttons[i].addEventListener('mouseover', function () {
            if (buttons[i].closest('.b-card').classList.contains('selected')) {
                buttons[i].querySelector('.b-card__note').textContent = 'Котэ не одобряет?';
                buttons[i].querySelector('.b-card__note').style.color = '#D91667';
            }
        })

        buttons[i].addEventListener('mouseout', function () {
            if (buttons[i].closest('.b-card').classList.contains('selected')) {
                buttons[i].querySelector('.b-card__note').textContent = 'Сказочное заморское яство';
                buttons[i].querySelector('.b-card__note').style.color = '#666666';
            }
        })
    }

    for (let i = 0; i < buttonsText.length; ++i) {
        buttonsText[i].addEventListener('click', function () {
            buttonsText[i].closest('.b-card').classList.toggle('selected');
        })
    }

    // buttons.forEach(button => {
    //     button.addEventListener('click', function () {
    //         button.closest('.b-card').classList.toggle('selected');
    //         button.querySelector('.b-card__note').textContent = 'Сказочное заморское яство';
    //         button.querySelector('.b-card__note').style.color = '#666666';
    //         console.log('click')
    //     })

    //     button.addEventListener('mouseover', function () {
    //         if (button.closest('.b-card').classList.contains('selected')) {
    //             button.querySelector('.b-card__note').textContent = 'Котэ не одобряет?';
    //             button.querySelector('.b-card__note').style.color = '#D91667';
    //         }
    //     })

    //     button.addEventListener('mouseout', function () {
    //         if (button.closest('.b-card').classList.contains('selected')) {
    //             button.querySelector('.b-card__note').textContent = 'Сказочное заморское яство';
    //             button.querySelector('.b-card__note').style.color = '#666666';
    //         }
    //     })
    // })


    // buttonsText.forEach(button => {
    //     button.addEventListener('click', function () {
    //         button.closest('.b-card').classList.add('selected')
    //     })
    // })
})();