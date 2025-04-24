const upBtn = document.querySelector(".up-button");//кнопка стрелка вверх
const downBtn = document.querySelector(".down-button");//кнопка стрелка вниз

const sidebar = document.querySelector(".sidebar");//сайдбар
const container = document.querySelector(".container");//блок контейнер с кнопками
const mainSlide = document.querySelector(".main-slide");//блок с картинками
const slidesCount = mainSlide.querySelectorAll("div").length;//количество картинок в блоке с картинками

//текущая картинка
let activeSlideIndex = 0;

sidebar.style.top=`-${(slidesCount-1)*100}vh`

//нажатие на кнопку стрелка вверх и стрелка вниз
upBtn.addEventListener("click",()=>{
  changeSlide("up");//
})
downBtn.addEventListener("click",()=>{
  changeSlide("down");
})

//назначение клавиш
document.addEventListener("keydown",(event)=>{
  if(event.key==="ArrowUp"){
    changeSlide("up");
  }else if(event.key==="ArrowDown"){
    changeSlide("down");
  }
})

//функция меняет слайды по кнопкам
function changeSlide(direction) {
  if(direction==="up"){
    activeSlideIndex++;
    if(activeSlideIndex===slidesCount){
      activeSlideIndex=0;
    }
  }else if(direction==="down"){
    activeSlideIndex--;
    if(activeSlideIndex<0){
      activeSlideIndex=slidesCount-1;
    }
  }   
const height=container.clientHeight

  mainSlide.style.transform=`translateY(-${activeSlideIndex*height}px)`

    sidebar.style.transform=`translateY(${activeSlideIndex*height}px)`
}



