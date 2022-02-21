function imgSlider(anything){
    document.querySelector('.litshoe').src= '../img/' + anything;
    if(anything='../img/shoe2.png')
    {
        const elemnt=document.querySelector('.litshoe');
        elemnt.style.transform="translateX(20px);";
    }
}
function circlecolor(color){
    const circle= document.querySelector('.circle');
    circle.style.background=color;
}
function topdistance(){
    const elemnt=document.querySelector('.litshoe');
    elemnt.style.transform="translateX(20px);";
}