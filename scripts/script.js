// ❗❗❗❗❗❗remove action btn❗❗❗❗❗❗
const removeActive = () => {
  const categoryBtns = document.querySelectorAll(".category-btn");
  // console.log(categoryBtns);
  categoryBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

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
  categoryContainer.innerHTML = "";
  categories.forEach((category) => {
    // console.log(category.id)
    const div = document.createElement("div");
    div.innerHTML = `
        <div>
              <button id="category-${category.id}" onclick="loadCategoryBasedPlants('${category.id}')" class="categories text-left bg-[#15803d] md:bg-transparent md:w-full md:hover:text-white text-white font-bold px-5 rounded-[5px] py-2 hover:bg-[#15803d] md:text-gray-700 category-btn">${category.category_name}</button>
        </div>
        `;
    categoryContainer.appendChild(div);
  });
};
getCategories();

// ❗❗❗❗❗❗main section❗❗❗❗❗❗
const loadCategoryBasedPlants = (id) => {
  manageSpinner(true);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickedBtn = document.getElementById(`category-${id}`);
      clickedBtn.classList.add("active");
      // console.log(clickedBtn);
      displayCategoryBasedPlants(data.plants);
    });
};

const displayCategoryBasedPlants = (categoryPlants) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  categoryPlants.forEach((plant) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-white hover:bg-gray-200">
                <figure class="px-3 pt-3">
                  <img
                    src="${plant.image}"
                    class="rounded-xl h-100 w-full"
                  />
                </figure>
                <div class="card-body h-65  items-center text-left">
                  <h2 onclick="loadPlantsDetails(${plant.id})" class="card-title text-left w-full cursor-pointer">${plant.name}</h2>
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
                    <button class="btn hover:bg-green-800 rounded-lg bg-[#15803d] w-full text-white add-to-card">Add to Cart</button>
                  </div>
                </div>
              </div>
    `;
    cardContainer.appendChild(div);
  });
  manageSpinner(false);
};

// ❗❗❗❗❗❗show all plants by default❗❗❗❗❗❗
const loadAllPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showAllPlants(data.plants));
};
const showAllPlants = (plants) => {
    
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  plants.forEach((plant) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-white hover:bg-gray-200">
                <figure class="px-3 pt-3">
                  <img
                    src="${plant.image}"
                    class="rounded-xl h-100 w-full"
                  />
                </figure>
                <div class="card-body h-65 items-center text-left">
                  <h2 onclick="loadPlantsDetails(${plant.id})" class="card-title text-left w-full cursor-pointer">${plant.name}</h2>
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
                    <button class="btn hover:bg-green-800 rounded-lg bg-[#15803d] w-full text-white add-to-card">Add to Cart</button>
                  </div>
                </div>
              </div>
    `;
    cardContainer.appendChild(div);
  });
};
loadAllPlants();

// ❗❗❗❗❗❗modal❗❗❗❗❗❗
const loadPlantsDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlantDetails(data.plants));
};
const displayPlantDetails = (plantsInfo) => {
  // console.log(plantsInfo);
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = `
  <h3 class="text-3xl font-bold">${plantsInfo.name}!</h3>
          <img src="${plantsInfo.image}" alt="" />
          <p class="font-bold text-xl">
            Category : <span class="text-gray-500"> ${plantsInfo.category}</span>
          </p>
          <p class="font-bold text-xl">Price : ${plantsInfo.price}</p>
          <p class="py-4"><span class="font-bold">Description</span>: ${plantsInfo.description}</p>
  `;
  document.getElementById("my_modal_5").showModal();
};

// ❗❗❗❗❗❗Challenge Part❗❗❗❗❗❗
const cardContainer = document.getElementById('card-container')
cardContainer.addEventListener('click', (e) =>{
  const btn = e.target.closest('.add-to-card');
  if(btn){
    const addToCartContainer = document.getElementById('add-to-card-container');
    const price = Number(btn.parentNode.parentNode.children[2].children[1].children[0].children[1].innerText);
    const plantName = btn.parentNode.parentNode.children[0].innerText;
    alert(`${plantName} has been added in the card`);
    
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="flex justify-between items-center bg-[#f0fdf4] m-2 rounded-lg p-5">
                <div>
                  <h3 class="text-xl font-medium">${plantName}</h3>
                <h3 class="text-xl">${price}</h3>
                </div>
                <div class="h-10 w-10 flex justify-center items-center order-cancel ">
                  ❌
                </div>
              </div>
    `;
    addToCartContainer.appendChild(div);
  }

})


// ❗❗❗❗❗❗manage spinner❗❗❗❗❗❗
const manageSpinner = (status) => {
  if(status){
    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById('card-container').classList.add('hidden');
  }else{
    document.getElementById('spinner').classList.add('hidden');
    document.getElementById('card-container').classList.remove('hidden');
  }
}