requestJSON();

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
    document.querySelector('.dropdown-content').classList.toggle("visible");
    document.querySelector('.dropbtn i').classList.toggle("rotate");    
}
function searchNav(){
    document.querySelector('.menu-bar').classList.toggle("hidden");
    document.querySelector('.search-bar').classList.toggle("visible");
}
function menuMobile() {
    document.querySelector('.menu-bar').classList.toggle("visible");
    document.querySelector('.menu-btn').classList.toggle("hidden");
    document.querySelector('.logo-endava').classList.toggle("visible");
    document.querySelector('.close-menu-btn').classList.toggle("visible");
    document.querySelector('.mobile-background-menu').classList.toggle("visible");
    document.querySelector('.legal').classList.toggle("visible");
}

function requestJSON(){
    fetch('data/nav.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let json = JSON.stringify(myJson);
            console.log(myJson);
            console.log(typeof myJson);
            loadData(myJson);
        })
        .catch(error => console.error(error));
}

function loadData(data){
    const navbar = document.querySelector('.menu-bar');
    data.items.forEach(element => {
        const item = document.createElement("li");
        const anchor = document.createElement("a");

        anchor.textContent = element.label;
        anchor.href = element.url;

        item.append(anchor);

        if (element.items.length>0){
            item.classList.add("dropdown");
            anchor.classList.add("dropbtn");

            const icon = document.createElement("i");
            icon.classList.add("fas");
            icon.classList.add("fa-angle-down")
            anchor.append(icon);

            const dropdown = document.createElement("div");
            dropdown.classList.add("dropdown-content");

            element.items.forEach(elementInside => {
                const submenuItem = document.createElement("a");
                submenuItem.textContent = elementInside.label;
                submenuItem.href= elementInside.url;
                dropdown.append(submenuItem);
            });
            item.append(dropdown);
        }
        
        navbar.append(item);
    });

    const dropbtn = document.querySelector('.dropbtn');
    dropbtn.addEventListener('click', event => {
        event.preventDefault();
        dropdownMenu();
    });
}