const items = document.querySelectorAll('.projects li');
const tooltip = document.getElementById('tooltip');
const tooltipImg = document.getElementById('tooltipImg');
const tooltipText = document.getElementById('tooltipText');

items.forEach(item => {
    item.addEventListener('mouseenter', function(e) {
        const imgSrc = this.dataset.img;
        const text = this.dataset.tooltip;
        
        if (imgSrc) tooltipImg.src = imgSrc;
        if (text) tooltipText.textContent = text;
        
        tooltip.style.display = 'block';

      	const tooltipHeight = tooltip.offsetHeight || 200;
        tooltip.style.left = (e.clientX + 20) + 'px';
        tooltip.style.top = (e.clientY - tooltipHeight - 20) + 'px';
        // tooltip.style.left = (e.clientX + 20) + 'px';
        // tooltip.style.top = (e.clientY + 10) + 'px';
    });
    
    item.addEventListener('mousemove', function(e) {
        // tooltip.style.left = (e.clientX + 20) + 'px';
        // tooltip.style.top = (e.clientY + 10) + 'px';
        const tooltipHeight = tooltip.offsetHeight || 200;
        tooltip.style.left = (e.clientX + 20) + 'px';
        tooltip.style.top = (e.clientY - tooltipHeight - 20) + 'px';
    });
    
    item.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });
});