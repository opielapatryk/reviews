let image = document.querySelector("img")
let author = document.getElementById("name")
let position = document.getElementById("pos")
let description = document.getElementById("desc")
const prevButton = document.getElementById("left-button")
const nextButton = document.getElementById("right-button")
const randomButton = document.getElementById("random")

const reviews = [{
        id: 1,
        name: "Patryk",
        position: "Web Developer",
        img: "./images/1.jpg",
        description: "Lorem asidajsod aisd a fuwehefu UDG aefhuefia fhuaefau fh uafehu fauheuabd jasd kbfeu kaehf bjkabfjkd.",
    },
    {
        id: 2,
        name: "Kubuś",
        position: "Designer",
        img: "./images/2.jpg",
        description: "GERia i fauiehfaf aif heflaiknfd ali wdfjail flieaf ilaei fnlefin laeifn liakenf linaleif naen fi nilafen li.",
    },
    {
        id: 3,
        name: "Michaś",
        position: "ghost writer",
        img: "./images/3.jpg",
        description: "Oihasid aoiwdi ioahd iaodwnbdiaw dionawiond ajfnbjbfjvsbeufb se fbksbefukbusebf sekfbkse fkbsef sbfu sef buebfb.",
    },
    {
        id: 4,
        name: "Natalka",
        position: "Web Developer",
        img: "./images/4.jpg",
        description: "Usdu hauigewdauiey dasvbdhabvkbf akfbkaf b eaf baekufabfjkab fkba fku baeuf ua fbkufbaukwbda dbasbdkmbdvkxdv k vks gf.",
    },
]

window.addEventListener("DOMContentLoaded", () => {
    showPerson();
})

let currentItem = 0

function showPerson() {
    const item = reviews[currentItem]
    image.src = item.img
    author.textContent = item.name
    position.textContent = item.position
    description.textContent = item.description
}

nextButton.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson();
})

prevButton.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

randomButton.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson();
})