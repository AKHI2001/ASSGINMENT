var reviews = [{
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://wellgroomedgentleman.com/media/images/Haircut_for_a_Gentleman.2e16d0ba.fill-800x800-c100.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images.unsplash.com/photo-1577919518833-57dc0a0105e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2VudGxlbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
},
{
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images.pexels.com/photos/1416971/pexels-photo-1416971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
},
{
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images.unsplash.com/photo-1622497170185-5d668f816a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2VudGxlbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
},
];

var imgElement = document.getElementById("person-img");
var author = document.getElementById("author");
var job = document.getElementById("job");
var info = document.getElementById("info");
var prevBtn = document.querySelector("#prev-btn");
var nextBtn = document.querySelector("#next-btn");
var randomBtn = document.querySelector(".random-btn");



var currentIndex = 0;

prevBtn.addEventListener("click", prevClick);
nextBtn.addEventListener("click", nextClick);
randomBtn.addEventListener("click", randomaize);

function prevClick() {
if (currentIndex === 0) {
    currentIndex = reviews.length - 1;
} else {
    currentIndex--;
}
console.log(currentIndex);
updateUserDetails();
}

function nextClick() {
if (currentIndex === reviews.length - 1) {
    currentIndex = 0;
} else {
    currentIndex++;
}
console.log(currentIndex);
updateUserDetails();
}

function randomaize() {
currentIndex = Math.floor(Math.random() * reviews.length);
console.log(currentIndex);
updateUserDetails();
}

function updateUserDetails() {
imgElement.src = reviews[currentIndex].img;
author.innerText = reviews[currentIndex].name;
job.innerText = reviews[currentIndex].job;
info.innerText = reviews[currentIndex].text;
}