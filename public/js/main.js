const dropbtn = document.querySelector('.dropbtn');
dropbtn.addEventListener('click', event => {
    dropdownMenu();
});
const searchbtn = document.querySelector('.search-btn button');
searchbtn.addEventListener('click', event => {
    searchNav();
});
const menubtn = document.querySelector('.menu-btn button');
menubtn.addEventListener('click', event => {
    menuMobile();
});
const closebtn = document.querySelector('.close-menu-btn');
closebtn.addEventListener('click', event => {
    menuMobile();
});

function dropdownMenu(){
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.classList.toggle("visible");
}
function searchNav(){
    const menu = document.querySelector('.menu-bar');
    menu.classList.toggle("hidden");
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle("visible");
}
function menuMobile() {

    document.querySelector('.menu-bar').classList.toggle("visible");

    document.querySelector('.menu-btn').classList.toggle("hidden");

    document.querySelector('.logo-endava').classList.toggle("visible");

    document.querySelector('.close-menu-btn').classList.toggle("visible");
    document.querySelector('.mobile-background-menu').classList.toggle("visible");
}