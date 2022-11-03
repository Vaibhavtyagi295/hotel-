var tl = gsap.timeline();

tl.from(" header>img",{
    y:-90,
    duration:2,
    opacity:0,
});

tl.from(" header>h4",{
    y:-90,
    opacity:0,
    duration:1
});
tl.from(" #jai",{
    y:-90,
    opacity:0,
    duration:1
});
tl.from(" .pok>h4",{
    y:15,
    duration:1,
    opacity:0,
    stagger:0.5,
    
});
tl.from(" .pok>h3",{
    y:15,
    duration:1,
    opacity:0,
    stagger:0.5,
});
tl.from(" .pok>h2",{
    y:15,
    duration:1,
    opacity:0,
    stagger:0.5,
});
tl.from(" .pok>img",{
    y:15,
    duration:1,
    opacity:0,
    stagger:1.5,
});
tl.from(" .hook>img",{
    y:15,
    duration:1,
    opacity:0,
    stagger:1.5,
});

