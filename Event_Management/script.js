let filter=document.getElementsByClassName("filter")
let cards=document.getElementsByClassName("item")

for(let i=0;i<filter.length;i++){
    filter[i].addEventListener("click",function(){
        for (let btnn of filter) {
            btnn.classList.remove("active");
        }
        this.classList.add("active");
        let selected_filter=this.getAttribute("data-filter")
        for(let card of cards){
            let category=card.getAttribute("data-category")
            if((selected_filter==="all")||(category===selected_filter)){
                card.style.display="block"
            }
            else{
                card.style.display="none"
            }
        }
    })
}

// --------------------------------------filter completed-----------------------------------------

let search=document.getElementsByClassName("search")[0]

let searchbtn=document.getElementsByClassName("search-btn")[0]

function perform(){
    let searchvalue=search.value
    for(let card of cards){
        let content =card.querySelector(".detail1 p").innerText
        if(content.toLowerCase().includes(searchvalue.toLowerCase())){
            card.style.display="block"
        }
        else{
            card.style.display="none"
        }
    }
}

searchbtn.addEventListener("click",perform)

search.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        perform()
    }
});

// -----------------------------------------search functionality completed-----------------------------------------

let icon = document.querySelector("#menuIcon")
let menu = document.querySelector(".container4")
icon.addEventListener("click", function(){
    icon.classList.toggle("rotate");
    menu.classList.toggle("show")
    if(icon.classList.contains("bi-list")){
        icon.classList.remove("bi-list");
        icon.classList.add("bi-x");
    } 
    else {
        icon.classList.remove("bi-x");
        icon.classList.add("bi-list");
    }
})

// ---------------------------------menu toggle completed ----------------------------------------

const events = [
  {
    id: 1,
    title: "Summer Beats Live Concert",
    description: "Experience an electrifying night filled with live performances from top bands and artists. Enjoy music, lights, and an unforgettable crowd atmosphere.",
    date: "March 25, 2025",
    location: "City Arena, New York",
    image: "event_card1.jpg",
    price: "$49"
  },
  {
    id: 2,
    title: "Full Stack Web Dev Bootcamp",
    description: "An intensive bootcamp covering HTML, CSS, JavaScript, React, and backend development. Perfect for beginners and aspiring developers.",
    date: "April 2, 2025",
    location: "Tech Hub Center, San Francisco",
    image: "event_card2.jpg",
    price: "$199"
  },
  {
    id: 3,
    title: "Modern Art & Creativity Expo",
    description: "Explore innovative art pieces from contemporary artists around the world. A perfect place for art lovers and creative minds.",
    date: "April 10, 2025",
    location: "Downtown Art Gallery, Chicago",
    image: "event_card3.jpg",
    price: "$25"
  },
  {
    id: 4,
    title: "Sunrise Yoga Retreat",
    description: "Start your morning with guided yoga, meditation, and relaxation sessions in a peaceful natural setting.",
    date: "April 15, 2025",
    location: "Green Park Gardens, Los Angeles",
    image: "event_card4.jpg",
    price: "$30"
  },
  {
    id: 5,
    title: "International Street Food Fest",
    description: "Taste delicious street food from around the world. A paradise for food lovers with live music and cultural performances.",
    date: "April 20, 2025",
    location: "Central Park, New York",
    image: "event_card5.jpg",
    price: "$15"
  },
  {
    id: 6,
    title: "Laugh Out Loud Comedy Show",
    description: "An evening full of laughter featuring top stand-up comedians and hilarious performances.",
    date: "April 28, 2025",
    location: "Grand Theater, Boston",
    image: "event_card6.jpg",
    price: "$20"
  },
  {
    id: 7,
    title: "EDM Neon Night Festival",
    description: "Dance all night at the biggest EDM festival with world-famous DJs and stunning neon visuals.",
    date: "April 5, 2025",
    location: "Sky Dome Stadium, Las Vegas",
    image: "concert_image3.jpg",
    price: "$75"
  },
  {
    id: 8,
    title: "Classical Symphony Evening",
    description: "Enjoy a mesmerizing performance by a live symphony orchestra playing timeless classical masterpieces.",
    date: "April 18, 2025",
    location: "Grand Opera Hall, Chicago",
    image: "concert_image2.jpg",
    price: "$60"
  },
  {
    id: 9,
    title: "UI/UX Design Masterclass",
    description: "Learn advanced UI/UX principles, design systems, and user research techniques from industry experts.",
    date: "April 12, 2025",
    location: "Innovation Lab, Seattle",
    image: "workshop_2.jpg",
    price: "$120"
  },
  {
    id: 10,
    title: "AI & Machine Learning Seminar",
    description: "Discover the latest trends in AI and ML with live demos and expert talks.",
    date: "April 22, 2025",
    location: "Silicon Tech Park, Austin",
    image: "workshop3.jpg",
    price: "$150"
  },
  {
    id: 11,
    title: "International Photography Expo",
    description: "Showcasing breathtaking photography collections and workshops by renowned photographers.",
    date: "April 19, 2025",
    location: "Lens Studio Hall, Boston",
    image: "art2.webp",
    price: "$35"
  },
  {
    id: 12,
    title: "Handmade Crafts & Design Fair",
    description: "Explore unique handmade crafts, artisan products, and creative design collections.",
    date: "April 27, 2025",
    location: "Artisan Market Square, Portland",
    image: "art3.jpg",
    price: "$18"
  },
  {
    id: 13,
    title: "Meditation & Mindfulness Camp",
    description: "Reconnect with yourself through guided meditation sessions and mindfulness activities.",
    date: "April 21, 2025",
    location: "Peace Valley Resort, Colorado",
    image: "wellness.jpg",
    price: "$40"
  },
  {
    id: 14,
    title: "Outdoor Fitness Bootcamp",
    description: "High-energy outdoor workout sessions led by professional trainers to boost strength and stamina.",
    date: "April 30, 2025",
    location: "Central Fitness Arena, Miami",
    image: "wellness2.jpg",
    price: "$28"
  },
  {
    id: 15,
    title: "Dessert Carnival 2025",
    description: "Indulge in delicious desserts, cakes, chocolates, and sweet treats from top bakeries.",
    date: "April 28, 2025",
    location: "Sweet Treats Plaza, Houston",
    image: "comedy1.jpg",
    price: "$12"
  },
  {
    id: 16,
    title: "Saturday Night Open Mic",
    description: "Enjoy live performances from aspiring comedians and performers in a fun open mic night.",
    date: "May 3, 2025",
    location: "Smile Club Lounge, Denver",
    image: "comedy2.jpg",
    price: "$10"
  }
];


let model_content=document.getElementsByClassName("modal_content")[0]
let view=document.getElementsByClassName("view")
let modal=document.getElementsByClassName("modal")[0]
let closebtn=document.getElementById("closebtn")

for(let vie of view){
    vie.addEventListener("click",function(){
        let data=vie.getAttribute("data-id")
        for(let evnt of events){
            if(evnt["id"]===Number(data)){
                model_content.querySelector(".titles").innerHTML=evnt["title"]
                model_content.querySelector("img").setAttribute("src",evnt["image"])
                model_content.querySelector(".desc").innerHTML=evnt["description"]
                model_content.querySelector(".dates").innerHTML=evnt["date"]
                model_content.querySelector(".locations").innerHTML=evnt["location"]
                model_content.querySelector(".prices").innerHTML=evnt["price"]
                 modal.classList.add("shows")
            }
        }
    })
}

closebtn.addEventListener("click",function(){
    modal.classList.remove("shows")
})