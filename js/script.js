var menuLink = document.querySelector("#menuHam h4") // for cursor effect on links //
var menuHam = document.querySelector("#nav i")
var menuClose = document.querySelector("#menuHam i")


// <!---- for nav menuHam timeline animation start --------------------> // 
var menuHam = document.querySelector("#nav i")
var menuClose = document.querySelector("#menuHam i")

var tl = gsap.timeline()

tl.to ("#menuHam",{
    right: 0,
    duration: 0.5,
    ease: "circ.out",
})

tl.from ("#menuHam h4",{
    x: 100,
    duration: .7,
    stagger: 0.2,
    ease: "power2.out",
    opacity: 0,
})

tl.from ("#menuHam i",{
    opacity: 0,
    duration:0.5,
    ease: "power2.out",
})

tl.pause()

menuHam.addEventListener("click",function(){
    tl.play()
})

menuClose.addEventListener("click",function(){
    tl.reverse()
})
// <!---- for nav menuHam timeline animation end --------------------> // 