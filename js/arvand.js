let item = document.querySelectorAll('.menu-container li');
let list = document.querySelector('.menu-container li ul'); 
item.forEach(function(item, index) {
    item.addEventListener('click' , function (e) {
        
        e.preventDefault();
        
        document.querySelector('.menu-container .selected').classList.remove('selected');
        this.classList.add('selected');
        
        let dataBox = this.getAttribute('data-content');
        
        document.querySelector('.min-center .selected').classList.remove('selected');
        document.querySelector(".min-center li[data-content="+ dataBox +"]").classList.add('selected');
        
        

    })
    
})

