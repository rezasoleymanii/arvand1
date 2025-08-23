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

function Show_Hide(){
    var MyBox = document.getElementById("MyBox");
    var MyButton = document.getElementById("MyButton");
    if(MyBox.style.display == "none"){
     MyBox.style.display = "block";
     MyButton.innerHTML = "مخفی کن";
    }else{
     MyBox.style.display = "none";
     MyButton.innerHTML = "نمایش بده";
    }
    }


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("loanProgressChart");
    const ctx = canvas.getContext("2d");
  
    const size = 150;
    canvas.width = size;
    canvas.height = size;
  
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 10;
    const lineWidth = 15;
  
    const percent = 70;
  

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#e5e7eb";
    ctx.stroke();
  
    const startAngle = -0.5 * Math.PI;
    const endAngle = startAngle - (percent / 100) * 2 * Math.PI;    
  
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, true); 
    ctx.strokeStyle = "#3b82f6";
    ctx.stroke();

    const percentStr = percent.toString().replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);

    ctx.font = "bold 20px vazir";
    ctx.fillStyle = "#404040";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(percentStr + "%", centerX, centerY);
  });
