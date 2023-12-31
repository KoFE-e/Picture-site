const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg(block) {
        const img = block.querySelector('img');
        img.classList.add('animated', 'fadeIn');
        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });
    }

    function hideImg(block) {
        const img = block.querySelector('img');
        img.classList.remove('animated', 'fadeIn');
        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
            item.style.display = 'block';
            item.classList.add('animated', 'fadeIn');
        });
    }

    blocks.forEach(item => {
        item.addEventListener('mouseover', () => {
            showImg(item);
        });
        item.addEventListener('mouseout', () => {
            hideImg(item);
        });
    });
};

export default pictureSize;