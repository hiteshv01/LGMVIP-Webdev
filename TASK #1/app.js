//javaScript File ///

let thumb = document.getElementsByClassName('thumb')

let Images = document.getElementsByClassName('active')

for (var i=0; i < thumb.length; i++)
{

  thumb[i].addEventListener('mouseover', function(){
    console.log(Images)

    document.getElementById('featured').src = this.src
  })
}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft -= 60
})

buttonRight.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft += 60
})
