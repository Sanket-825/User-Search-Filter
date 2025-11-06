const users = [
  {
    name: "Sanket Parab",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: "Tech enthusiast | Living between pixels and playlists."
  },
  {
    name: "Maya Patel",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    bio: "Dreamer. Coffee addict. Forever chasing sunsets."
  },
  {
    name: "Ethan Brooks",
    pic: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&q=80&w=400",
    bio: "Silent chaos in a loud world | Not for everyone"
  },
  {
    name: "Aisha Khan",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    bio: "Empath | Book hoarder | Building calm in chaos."
  },
  {
    name: "Liam Carter",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=400",
    bio: "Explorer of cities and ideas | Less talk, more walk."
  },
  {
    name: "Nora Williams",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400",
    bio: "Introvert with loud thoughts | Plant mom 🌿"
  },
  {
    name: "Arjun Mehta",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    bio: "Coding, coffee, and calm chaos | Keep it minimal."
  },
    {
    name: "Ryan Cooper",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    bio: "Traveler at heart | Designing life one step at a time."
  }
];

function showUsers(arr){
// Select the container where cards will go
const container = document.querySelector(".card-container");

// Loop through users and create cards
arr.forEach((user) => {
  // Create the card element
  const card = document.createElement("article");
  card.className = "card custom-card";

  // Image element
  const img = document.createElement("img");
  img.className = "card-img";
  img.src = user.pic;
  img.alt = `${user.name} profile photo`;

  // Blurred overlay
  const blur = document.createElement("div");
  blur.className = "blur-overlay";
  blur.style.backgroundImage = `url(${user.pic})`;

  // Content container
  const content = document.createElement("div");
  content.className = "card-content text-start";

  // Name
  const name = document.createElement("h3");
  name.textContent = user.name;

  // Bio
  const bio = document.createElement("p");
  bio.textContent = user.bio;

  // Assemble content
  content.appendChild(name);
  content.appendChild(bio);

  // Assemble card
  card.appendChild(img);
  card.appendChild(blur);
  card.appendChild(content);

  // Add to container
  container.appendChild(card);
});
}

showUsers(users);

// let inp = document.querySelector(".search-input");
// inp.addEventListener("input", ()=>{
//     // console.log(inp.value);
//    let value = inp.value.toLowerCase();

//    let newUsers = users.filter((user)=>{
//         return user.name.toLocaleLowerCase().includes(value);
//     });

//     document.querySelector(".card-container").innerHTML = "";
//     showUsers(newUsers);
// })



// Debouncing Use
//Excellent thinking 💡 — yes, right now your search runs on every keystroke, which is fine for a few users but inefficient for larger data sets.
// Implementing debouncing is the perfect way to optimize it.

let inp = document.querySelector(".search-input");
let debounceTimer; // timer reference

inp.addEventListener("input", () => {
  clearTimeout(debounceTimer); // clear the old timer each time you type

  debounceTimer = setTimeout(() => {
    let value = inp.value.toLowerCase();

    let newUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(value);
    });

    const container = document.querySelector(".card-container");
    container.innerHTML = "";

    if(newUsers.length === 0){
        //if no users match
        const msg = document.createElement("p");
        msg.textContent = "No user Found";
        msg.className = "text-light fs-4";
        container.appendChild(msg);
    }
    else{
        //Show the matching users
        showUsers(newUsers);
    }

  }, 300); 
});


// Saare  users show karana
// flter karana har baar input karne pai
// show karna filtered users

