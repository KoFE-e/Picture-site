const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
        input.addEventListener('paste', function() {
            setTimeout(function() {
                input.value = input.value.replace(/[^а-яё 0-9]/ig, '');
            }, 10);
        });
    });
};

export default checkTextInputs;