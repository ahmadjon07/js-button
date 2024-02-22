var elElement = document.querySelector('.element');
var elWrapper = document.querySelector('.wrapper');
var elTitle = document.querySelector('.title')
var mode = true
function fn(){
    if(mode == true){
        elElement.classList.add('light')
        elElement.classList.remove('dark')
        elWrapper.style.background = ('#000')
        elTitle.classList.add('dmode')
        elTitle.classList.remove('lmode')
    }else{
            elElement.classList.add('dark');
            elElement.classList.remove('light');
            elWrapper.style.background = ('#fff')
            elTitle.classList.add('lmode')
            elTitle.classList.remove('dmode')
    }
    mode = !mode
    console.log(mode);
}