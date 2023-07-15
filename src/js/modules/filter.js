const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    const choiceType = (choicedClass) => {
        const choicedType = wrapper.querySelectorAll(`.${choicedClass}`);
        if (choicedClass == 'granddad' || choicedClass == 'grandmother') typeFilter();
        else typeFilter(choicedType);
    };

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(item => {
                item.classList.remove('active');
            });
            choiceType(target.getAttribute('class'));
            target.classList.add('active');
        }
    });
};

export default filter;