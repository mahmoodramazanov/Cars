
const cars = [
  {
    imgUrl:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F02%2F13%2F10%2F29%2F43%2F0afeb482-2db8-416a-ab6a-9e162ffda074%2F1980_rxFFehmVidJE8kpAzfijsA.jpg",
    price: 25900,
    name: "DFSK Glory 330 S",
    year: 2022,
    engine: 1.5,
    mileage: 0,
  },
  {
    imgUrl:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F06%2F12%2F10%2F42%2F19%2F17d012f2-34e7-4f80-a711-008bc04bd5d3%2F15061_ahjfZPrKkiKGvwFTI2OU2A.jpg",
    price: 330000,
    name: "Ferrari 458 Italia",
    year: 2014,
    engine: 4.5,
    mileage: 24600,
  },
  {
    imgUrl:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F24%2F17%2F30%2F44%2F5957c5ba-3afc-4fae-aff1-7856e5ff8429%2F3654_bJxEwYxEFttUfbKkEyZ5-g.jpg",
    price: 15500,
    name: "Toyota Prius",
    year: 2008,
    engine: 1.5,
    mileage: 238183,
  },
  {
    imgUrl:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F02%2F01%2F31%2F50%2Fd63f9a9f-a2ee-438d-9c9c-084bcd927ad0%2F91826_aksdWQDG8m5ipSz3Z8-zkw.jpg",
    price: 35000,
    name: "BMW 328",
    year: 2015,
    engine: 2.0,
    mileage: 103000,
  },
  {
    imgUrl:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F06%2F08%2F19%2F00%2F42%2F40c83df0-b48c-4e45-9214-ae6939fe3c59%2F79805__ZLwubAZxB-xRAlaWjXMUw.jpg",
    price: 550000,
    name: "Mercedes G 63 AMG",
    year: 2023,
    engine: 4.0,
    mileage: 0,
  },
  {
    imgUrl:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F28%2F20%2F35%2F50%2F56bacfa6-178a-491a-bb96-5ec7fed21ed3%2F91789_bGInL6wH48IBl1paW31DaQ.jpg",
    price: 44000,
    name: "Mercedes CLA 250",
    year: 2014,
    engine: 2.0,
    mileage: 113000,
  },
];


function writeIn(arr) {
  const cardsWrapper = document.querySelector(".cards-wrapper");
  let txt = "";
  arr.forEach((i) => {
    txt += `
        <div class="card" >
            <div class="card-inside">
                <div class="card-img">
                    <img
                        src=${i.imgUrl}
                        alt=""
                    />
                </div>
                <div class="card-writings">
                <div class="car-price">
                    <p>${i.price}AZN</p>
                </div>
                <div class="car-name">
                    <p>${i.name}</p>
                </div>
                <div class="about-car">
                    <p>
                        <span>${i.year}</span>, <span>${i.engine} L</span>,
                        <span>${i.mileage} km</span>
                    </p>
                </div>
            </div>
        </div>
        </div>
        `;
  });
  cardsWrapper.innerHTML = txt;
}

const cardsArray = cars;
writeIn(cardsArray);

function yearFilter(arr){
  let yearFilteredArray = arr;
  if (yearSelector.value !== "all") {
    yearFilteredArray = arr.filter((item) => {
      return (
        item.year >= +yearSelector.value && item.year <= +yearSelector.value + 4
      );
    });
  }
  // else {
  //   yearFilteredArray = arr;
  // }
  return yearFilteredArray;
}

function nameFilter(arr){
  let inputValue = searchInput.value;
  const nameFilteredArray = cars.filter((i) => {
    return i.name.toLowerCase().includes(inputValue.toLowerCase().trim());
  });
  return nameFilteredArray;
}

const priceSortBtn = document.querySelector('.sect-header button')
priceSortBtn.addEventListener("click", () => {
  cardsArray.sort((a, b) => {
    return a.price - b.price;
  });
  writeIn(cardsArray);
});

//ILLERE GORE SECHIM
const yearSelector = document.querySelector('#years')
yearSelector.addEventListener("change", () => {
  writeIn(yearFilter(nameFilter(cars)));
});

// SEARCH START

// // SEACH-ICONS
const fullIcon = document.querySelector(".search-icons");
const circleIcon = document.querySelector(".fa-circle");
// const minusIcon = document.querySelector(".fa-minus");
const visibleMinus = document.querySelector(".visible");
const inVisibleMinus = document.querySelector(".invisible");
const searchInput = document.querySelector("#search");

let nameSort = [];
searchInput.addEventListener("keyup", () => {
  writeIn(yearFilter(nameFilter(cars)));
});


fullIcon.addEventListener("click", () => {
  circleIcon.classList.toggle("circle-top");
  visibleMinus.classList.toggle("fa-minus-onClick");
  inVisibleMinus.classList.toggle("fa-minus-onClick");
  inVisibleMinus.classList.toggle("rotate135-onClick");
  searchInput.classList.toggle("input-width");
});
