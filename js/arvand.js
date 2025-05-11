let item = document.querySelectorAll('.menu-container li ');
let list = document.querySelectorAll('.menu-container li ul li ');
item.forEach(function(item, index) {
    item.addEventListener('click' , function (e) {
        
        e.preventDefault();
        
        document.querySelector('.menu-container li.selected').classList.remove('selected');
        this.classList.add('selected');
        
        let dataBox = this.getAttribute('data-content');
        
        document.querySelector('.min-center .selected').classList.remove('selected');
        document.querySelector(".min-center li[data-content="+ dataBox +"]").classList.add('selected');
        
        

    })
    
})
list.forEach(function(list, index) {

    list.addEventListener('click' , function (w) {
        
        document.querySelector('.menu-container li ul li.menu-selected').classList.remove('menu-selected');
        this.classList.add('menu-selected');
        
        let dataBox = this.getAttribute('data-content');

        document.querySelector('.min-center ul .menu-selected').classList.remove('menu-selected');
        document.querySelector(".min-center ul li[data-content="+ dataBox +"]").classList.add('menu-selected');
    })

})


