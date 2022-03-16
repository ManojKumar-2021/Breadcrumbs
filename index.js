const breadcrumbs=document.querySelectorAll('.breadcrumbs__item');


breadcrumbs.forEach(panel1=>
    {
        panel1.addEventListener('click',()=>{
        removeclass()
        panel1.classList.add('breadcrumbs__link--active')
    })
})


function removeclass(){
    breadcrumbs.forEach(panel=>{
        panel.classList.remove('breadcrumbs__link--active');
    })
}



