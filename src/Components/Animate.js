import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Animate text 
const textIntro = (elem) => {
    let ctx = gsap.context(() => {
        gsap.from(elem, {
            xPercent: -300,
            opacity: 0,
            stagger: 0.2,
            duration: 1.5,
            ease: "power1",
        });
    })

    return () => (ctx.revert());
};

const buttonIntro = (elem) => {
    let ctx = gsap.context(() => {
        gsap.from(elem, {
            yPercent: +300,
            opacity: 0,
            stagger: 0.2,
            duration: 1.5,
            ease: "power1",
        });
    })

    return () => (ctx.revert());
};

const imgIntro = (elem) => {
    let ctx = gsap.context(() => {
        gsap.from(elem, {
            xPercent: +200,
            opacity: 0,
            stagger: 0.2,
            duration: 1.5,
            ease: "power1",
        });
    })

    return () => (ctx.revert());
};

const scrollSkills = (elem) => {

    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
        gsap.set(elem, { scale: 0.6 });
        gsap.timeline({
            scrollTrigger: {
                trigger: '.wrap',
                scrub: .3,
                start: 'top top',
                pin: true,
            }
        })
            .to(elem, { scale: 1, transformOrigin: 'bottom center' })
    })

    return () => (ctx.revert());

}

export { textIntro, buttonIntro, imgIntro, scrollSkills };