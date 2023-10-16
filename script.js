// locomotive scroll
function init() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


    ScrollTrigger.refresh();
}
init()

let crsr  = document.querySelector(".cursor");
let main =  document.querySelector(".main");
main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";

})
// locomotive scroll
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main h1",
        scroller: ".main",
        markers: false,
        start: "top 28%",
        end: "top 0",
        scrub: 3,
    }
})

tl.to(".main h1", {
    x: -100,
}, "shrood")
tl.to(".section-2-heading", {
    x: -10,
}, "shrood")
tl.to(".main h2", {
    x: 100,
}, "shrood")
tl.to(".main video", {
    width: "90%"
}, "shrood")

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".main h1",
        scroller: ".main",
        markers: false,
        start: "top -120%",
        end: "top -130%",
        scrub: 3,
    }
})

tl2.to(".main", {
    backgroundColor: "#fff",
}) 
