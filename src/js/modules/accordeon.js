const accordeon = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector);
        //   blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(item => {
    //     item.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(item => {
    //     item.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             this.classList.add('active', 'active-style');
    //         } else {
    //             this.classList.remove('active', 'active-style');
    //         }
    //     });
    // });

    btns.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });
};

export default accordeon;