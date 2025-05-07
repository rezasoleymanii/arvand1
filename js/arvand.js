let item = document.querySelectorAll('.menu-container li a');
let list = document.querySelector('.menu-container li .list')
item.forEach(function(item, index) {
    item.addEventListener('click' , function (e) {
        e.preventDefault();
        
        document.querySelector('.menu-container li a.selected').classList.remove('selected');
        this.classList.add('selected');
        
        let dataBox = this.getAttribute('data-content');
        
        document.querySelector('.min-center li.selected').classList.remove('selected');
        document.querySelector(".min-center li[data-content="+ dataBox +"]").classList.add('selected');
        

    })
})

