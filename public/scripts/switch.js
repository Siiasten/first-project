let btns = document.querySelectorAll('.number');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {    
        document.querySelectorAll('.txt_and_img').forEach(function(el) {
            el.style.display = 'none';
        }); 
        
        document.querySelector(`.${this.dataset.menuName}`).style.display = 'block';
    });
}