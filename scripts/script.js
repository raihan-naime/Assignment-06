// ❗❗❗❗❗❗Categories section❗❗❗❗❗❗

// get categories
const getCategories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};
// display categories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div>
              <button onclick="loadCategoryBasedPlants('${category.id}')" class="categories text-left bg-[#15803d] md:bg-transparent md:w-full md:hover:text-white text-white font-bold px-5 rounded-[5px] py-2 hover:bg-[#15803d] md:text-gray-700">${category.category_name}</button>
        </div>
        `;
    categoryContainer.appendChild(div);
  });
};
getCategories();

// ❗❗❗❗❗❗main section❗❗❗❗❗❗
const loadCategoryBasedPlants = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategoryBasedPlants(data.plants));
};

// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//     "name": "Mango Tree",
//     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//     "category": "Fruit Tree",
//     "price": 500
// }


const displayCategoryBasedPlants = (categoryPlants) => {
    // const allCategories = document.querySelectorAll('.categories');
    // console.log(allCategories);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

  categoryPlants.forEach((plant) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card bg-white hover:bg-gray-200">
                <figure class="px-3 pt-3">
                  <img
                    src="${plant.image}"
                    class="rounded-xl h-100 w-full"
                  />
                </figure>
                <div class="card-body h-65  items-center text-left">
                  <h2 class="card-title text-left w-full">${plant.name}</h2>
                  <p>
                    ${plant.description}
                  </p>
                  <div class="flex justify-between  w-full items-center">
                    <div class="bg-[#15803d70] rounded-xl ">
                      <p class="text-xl py-1 px-3 text-[#15803d]">${plant.category}</p>
                    </div>
                    <div>
                      <p>
                        <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                        <span>${plant.price}</span>
                      </p>
                    </div>
                  </div>
                  <div class="card-actions w-full">
                    <button class="btn hover:bg-green-800 rounded-lg bg-[#15803d] w-full text-white">Add to Cart</button>
                  </div>
                </div>
              </div>
    `;
    cardContainer.appendChild(div);

  });
};

// ❗❗❗❗❗❗show all plants by default❗❗❗❗❗❗
const loadAllPlants = () =>{
  const url = 'https://openapi.programming-hero.com/api/plants';
  fetch(url)
  .then(res => res.json())
  .then(data => showAllPlants(data.plants))
}


const showAllPlants = (plants) =>{
  const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    plants.forEach((plant) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card bg-white hover:bg-gray-200">
                <figure class="px-3 pt-3">
                  <img
                    src="${plant.image}"
                    class="rounded-xl h-100 w-full"
                  />
                </figure>
                <div class="card-body h-65 items-center text-left">
                  <h2 class="card-title text-left w-full">${plant.name}</h2>
                  <p>
                    ${plant.description}
                  </p>
                  <div class="flex justify-between  w-full items-center">
                    <div class="bg-[#15803d70] rounded-xl ">
                      <p class="text-xl py-1 px-3 text-[#15803d]">${plant.category}</p>
                    </div>
                    <div>
                      <p>
                        <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                        <span>${plant.price}</span>
                      </p>
                    </div>
                  </div>
                  <div class="card-actions w-full">
                    <button class="btn hover:bg-green-800 rounded-lg bg-[#15803d] w-full text-white">Add to Cart</button>
                  </div>
                </div>
              </div>
    `;
    cardContainer.appendChild(div);

  });
}
loadAllPlants();