var crsr = document.querySelector(".cursor")
var crsr1 = document.querySelector(".cursor1")
document.addEventListener("mousemove",function(dets){
   crsr.style.left = dets.x+"px"
   crsr.style.top = dets.y+"px"
   crsr1.style.left = dets.x-200 +"px"
   crsr1.style.top = dets.y-200 +"px"
})


var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        crsr.style.zIndex = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})



var hvr = document.querySelectorAll("#hover")
hvr.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})


var hv = document.querySelectorAll("#hvr")
hv.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})



gsap.to(".nav",{
    backgroundColor:"#000",
    duraton:1,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1.5,
    }
})

gsap.to(".main",{
 backgroundColor:"000",
 scrollTrigger:{
    trigger:".main",
    scroller:"body",
    start:"top -20%",
    end: "top -100%",
    scrub:0.1,
    duraton:0.5,
 }
})

gsap.from(".about img,.abouttext",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".about",
        scrolller:"body",
        start:"top 75%",
        end :"58%",
        scrub:3,
    }
})

gsap.from(".card",{
    scale:0.8,
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scrolller:"body",
        start:"top 100%",
        end :"top 90%",
        scrub:3,
    }
})

gsap.from("#left",{
    opacity:0,
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#left",
        scroller:"body",
        start:"top 100%",
        end:"top 47%",
        scrub:4,
    }
})

gsap.from("#right",{
    opacity:0,
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#left",
        scroller:"body",
        start:"top 100%",
        end:"top 47%",
        scrub:4,
    }
})

gsap.from(".page4 h1",{
    y:70,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        start:"top 100%",
        end:"top 80%",
        scrub:4,
}
})





