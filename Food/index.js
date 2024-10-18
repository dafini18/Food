var restaurants = [
    "Pizza Palace",
    "Sushi Central",
    "Burger Barn",
    "Taco Town",
    "Pasta Place",
    "Curry House",
    "BBQ Pit",
    "Vegan Delight"
  ];

  function pickRestaurant() {
    var randomIndex = Math.floor(Math.random() * restaurants.length);
    var selectedRestaurant = restaurants[randomIndex];
    
    var resultElement = document.querySelector(".result");
    resultElement.textContent = "You should visit: " + selectedRestaurant;
  }
