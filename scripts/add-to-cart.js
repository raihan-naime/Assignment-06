const billCard = [];
const loadAddToCardBtns = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => AddToCard(data.plants));
};

const AddToCard = (plants) => {
    const addToCartContainer = document.getElementById('add-to-card-container');
  plants.forEach((plant) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="flex justify-between items-center bg-[#f0fdf4] m-2 rounded-lg p-5">
                <div>
                  <h3 class="text-2xl font-medium">${plant.Name}</h3>
                <h3 class="text-xl"> <i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plant.price}</h3>
                </div>
                <div onclick="removeCard()" class="h-10 w-10 flex justify-center items-center order-cancel ">
                  ❌
                </div>
              </div>
    `;
    // addToCartContainer.appendChild(div);
    
  });
//   billCard.push(billCard);
};
// console.log(billCard);

// {
//     "id": 30,
//     "image": "https://i.ibb.co.com/0jLycYdv/Water-Hyacinth-min.jpg",
//     "name": "Water Hyacinth",
//     "description": "A floating plant with violet flowers that provide shade to aquatic creatures. Known for rapid growth in ponds.",
//     "category": "Aquatic Plant",
//     "price": 250
// }
