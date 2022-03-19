const contactsLink = document.querySelector('.Contacts');
const aboutMeLink = document.querySelector('.About-Me')
const SkillsLink = document.querySelector('.Skills')
const codeExampleLink = document.querySelector('.Code-example')
const ExpLink = document.querySelector('.Experience')
const EduLink = document.querySelector('.Education')
const EnglishLink = document.querySelector('.English')


let cntcts = document.getElementById('contacts')
let about = document.getElementById('about-me')
let Skls = document.getElementById('skills')
let codeExp = document.getElementById('code-example')
let exprnce = document.getElementById('experience')
let educ = document.getElementById('education')
let engl = document.getElementById('english')


contactsLink.addEventListener('click', function() {
    cntcts.classList.add('light-bright');
    setTimeout(function() { cntcts.classList.remove('light-bright'); }, 2000);
});

aboutMeLink.addEventListener('click', function() {
    about.classList.add('light-bright');
    setTimeout(function() { about.classList.remove('light-bright'); }, 2000);
})


SkillsLink.addEventListener('click', function() {
    Skls.classList.add('light-bright');
    setTimeout(function() { Skls.classList.remove('light-bright'); }, 2000);
})

codeExampleLink.addEventListener('click', function() {
    codeExp.classList.add('light-bright');
    setTimeout(function() { codeExp.classList.remove('light-bright'); }, 2000);
})


ExpLink.addEventListener('click', function() {
    exprnce.classList.add('light-bright');
    setTimeout(function() { exprnce.classList.remove('light-bright'); }, 2000);
})

EduLink.addEventListener('click', function() {
    educ.classList.add('light-bright');
    setTimeout(function() { educ.classList.remove('light-bright'); }, 2000);
})

EnglishLink.addEventListener('click', function() {
    engl.classList.add('light-bright');
    setTimeout(function() { engl.classList.remove('light-bright'); }, 2000);
})