// navigation

var tl = gsap.timeline();

tl.from(".nav h1",{
  y:-20,
  opacity:0,
  duration:1,
  delay:1
})

tl.from(".nav h3",{
  y:-20,
  opacity:0,
  duration:1,
  delay:1,
  stagger:0.3
});
tl.from(".nav h2",{
  y:-20,
  opacity:0,
  duration:1,
  delay:1,
  stagger:0.3
});

let darkMode = document.getElementById("dark-mode") ;

darkMode.addEventListener("click",function(){
 document.body.classList.toggle("dark-mode");
 document.body.classList.toggle("light-mode");

})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behaviour:'smooth'
      });
     });
    });

//home

gsap.from(".home h2" , {
  y:-30,
  opacity:0,
  duration:0.5,
  delay:1
});

gsap.from(".home h1" , {
  y:-30,
  opacity:0,
  duration:0.5,
  delay:1
});

gsap.from(".home button" , {
  y:-30,
  opacity:0,
  duration:0.5,
  delay:1
});

//projects

gsap.from(".projects h1",{
  y:-30,
  opacity:0,
  duration:0.5,
  delay:1
})

//form
let myForm = document.querySelector("#myform");
let formOutput = document.querySelector("#formOutput");

myForm.addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

 formOutput.innerHTML = `${name},
                        ${email},
                        ${message}` ;
})