function function1(){
           
    const button1 = document.querySelector('.subscribe-button');
    if(button1.innerHTML === 'Subscribe'){
     document.querySelector('.subscribe-button')
         .innerHTML = 'Subscribed';
         button1.classList.add('subscribed');
    }else{
     document.querySelector('.subscribe-button')
         .innerHTML= 'Subscribe';       
         button1.classList.remove('subscribed');}
    }