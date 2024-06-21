/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

// *============= MENU SHOW =================
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu")
    })
}

// *============= MENU HIDDEN =================
// Validate if constant exists
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
    })
}

// ================= MENU HIDDEN ==============


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))


// CHANGE BACKGROUND HEADER

const blurHeader = () => {
    const header = document.getElementById("header")
    // When the scroll is greather than 50 viewpoint height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add("blur-header")
                       : header.classList.remover("blur-header")
}
window.addEventListener("scroll", blurHeader)
/*=============== ADD BLUR TO HEADER ===============*/



/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_idnu9o9', 'template_q35avno', '#contact-form', '5zSZD46v-7mggUq2D')
       .then(() =>{
            //Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            //remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // clear input fields
             contactForm.reset()
            
            }, () =>{
            // Show Error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
                
       })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                   : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getattribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classlist.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true //Animations repeat
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})