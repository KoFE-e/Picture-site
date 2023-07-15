import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    // cards.forEach(item => {
    //     item.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(item => {
    //         item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.remove();
    // });

    btn.addEventListener('click', function() {
        getResource('http://localhost:3000/styles')
            .then(res => {
                const errorBlock = document.querySelector('.error');
                if (errorBlock) errorBlock.remove();
                createCards(res);
                btn.remove();
            })
            .catch(error => {
                const errorBlock = document.querySelector('.error');
                if (errorBlock) errorBlock.remove();
                const errorMessage = document.createElement('div');
                errorMessage.classList.add('error');
                errorMessage.style.textAlign = 'center';
                errorMessage.style.marginBottom = '20px';
                errorMessage.textContent = `Ошибка сервера: ${error}`;

                document.querySelector(wrapper).appendChild(errorMessage);
            });
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');

            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;