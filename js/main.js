// 돋보기 아이콘 정보를 가져오기
searchEl = document.querySelector('.search');
// input을 가져오기
searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', function (){
    searchInputEl.focus()
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused')
    searchInputEl.setAttribute('placeholder', '통합검색')

});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder', '')
});

badgesEl = document.querySelector('header .badges');
// 이렇게 구현하게 된다면 display가 부드럽지 않게 전환 될 것이다!!!
// window.addEventListener('scroll', _.throttle(function(){
//     console.log(window.scrollY)
//     if (window.scrollY > 500){
//         badgesEl.style.display = 'none';
//     }
//     else{
//         badgesEl.style.display = 'block';
//     }
// }, 300));
scrollUpEl = document.querySelector('#scroll-up')
scrollUpEl.addEventListener('click', function(){
    gsap.to(window, .7,{
        scrollTo: 0
    })
})
window.addEventListener('scroll', _.throttle(function(){
    if (window.scrollY > 500){
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgesEl, .6, {
            opacity: 0,
            display: 'none'
        })
        gsap.to(scrollUpEl, .6, {
            x:0
        })
    }
    else{
        gsap.to(badgesEl, .6, {
            opacity: 1,
            display: 'block'
        })
        gsap.to(scrollUpEl, .6, {
            x: 150
        })
    }
    
}, 300));

//이미지 페이드인 하기
fadeEls = document.querySelectorAll('.fade-in');
console.log(fadeEls);

// gsap.to(요소, 지속시간, 옵션)
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, { //이때 1초는 각 요소의 애니매이션 지속시간이다!!!
        delay: (index + 1) * .7 , //각각 0.7 1.4 2.1 2.8 뒤에 실행된다. 
        opacity: 1,
    })
})

// new Swiper(요소, 옵션);
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
        nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
      }    
});
new Swiper('.award .swiper-container',{
  slidesPerView: 5,
  loop: true,
  navigation:{
    prevEl: '.award .swiper-prev',
    nextEl: '.award .swiper-next',

  }
})
promotionEl = document.querySelector('.promotion')
toggleEl = document.querySelector('.toggle-promotion')

isHide = false;
toggleEl.addEventListener('click', function(){
    isHide = !isHide
    if (isHide == true){
        promotionEl.classList.add('hide')
        
    }
    else{
        promotionEl.classList.remove('hide')
    }
    console.log(promotionEl)
})

function random(min, max){
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingEl(el, delay, size){

    // gsap.to(요쇼, 시간, 옵션)
    gsap.to(el, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay),

    })
}

floatingEl('.floating1', 1, 15)
floatingEl('.floating2', .5, 15)
floatingEl('.floating3', 1.5, 20)


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl){
	//new ScrolMagic.Scene().setClassToggle().addTo();
	new ScrollMagic
	.Scene({
		triggerElement: spyEl, //spyEl요소를 trigger로 한다
		triggerHook: .75 
		//뷰포트를 기준 맨위를 0 맨아래를 1이라고 할때 트리거 요소가
		// 80%위치에 있을때를 Hook으로 명시
	})
	.setClassToggle(spyEl, 'show') //show라는 클래스를 추가
	.addTo(new ScrollMagic.Controller()); //컨트롤러를 추가한다
})

dateEl = document.querySelector('footer .date')
console.log(dateEl)

dateEl.innerText = new Date().getFullYear();

