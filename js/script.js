const quest1 = document.querySelector('.widget1');
const quest2 = document.querySelector('.widget2');
const quest3 = document.querySelector('.widget3');
const answer1 = document.querySelector('.info-1');
const answer2 = document.querySelector('.info-midle');
const answer3 = document.querySelector('.info-3');

function show1(){
    answer1.classList.toggle('active');
}
function show2(){
    answer2.classList.toggle('active');
}
function show3(){
    answer3.classList.toggle('active');
}
quest1.addEventListener('mouseenter', show1);
quest2.addEventListener('mouseenter', show2);
quest3.addEventListener('mouseenter', show3);