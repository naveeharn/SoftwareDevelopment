
//CONTACT INFORMATION
const reviews = [
    {
        name: 'naveeharn',
        job: 'head project',
        img: './assets/img-01.jpg',

        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        name: 'naveeharn',
        job: 'frontend',
        img: './assets/img-02.jpg',
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        name: 'naveeharn',
        job: 'backend',
        img: './assets/img-03.jpg',
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        name: 'naveeharn',
        job: 'web designer',
        img: './assets/img-04.png',
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')
const personId = document.querySelector('.person-id')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let current = 0

window.addEventListener('DOMContentLoaded', function(){
    img.src = reviews[current].img
    author.textContent = reviews[current].name
    job.textContent = reviews[current].job
    info.textContent = reviews[current].text
    personId.textContent = `${current+1}/${reviews.length}`
})

function showPerson(index) {
    img.src = reviews[index].img
    author.textContent = reviews[index].name
    job.textContent = reviews[index].job
    info.textContent = reviews[index].text
    personId.textContent = `${current+1}/${reviews.length}`
}

nextBtn.addEventListener('click', function (){
    current++
    if (current >= reviews.length) {
        current = 0
    }
    showPerson(current)
})

prevBtn.addEventListener('click', function (){
    current--
    if (current < 0) {
        current = reviews.length-1
    }
    showPerson(current)
})