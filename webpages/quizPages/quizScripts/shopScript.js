
let user_points = localStorage.getItem("points") || 0;
document.getElementById("starPoints").textContent = user_points;

// Get the array of purchased item IDs from local storage
var purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];
console.log(purchasedItems);

// Function to show the purchased item images
function showPurchasedImages() {
  purchasedItems.forEach(function(itemId) {
    var purchasedImage = document.getElementById(itemId);
    if (purchasedImage) {
      purchasedImage.classList.remove("hidden");
    }
  });
}

// Call the function to show purchased images on page load
showPurchasedImages();

function buyItem(item) {
  var cont = item.querySelector(".detailCont");
  var price = parseInt(item.getAttribute("data-price"));
  var itemImageId = item.querySelector(".shopIcon").id;
  var purchasedImage = document.getElementById(itemImageId);

  console.log(item);
  console.log(cont);
  console.log(price);

  if (user_points >= price) {

    user_points -= price;
    localStorage.setItem("points", user_points);
    document.getElementById("starPoints").textContent = user_points;
 
    
  
    // Save the purchased item in local storage
    // localStorage.setItem("purchasedItem", item.getElementsByClassName("details")[0].textContent);
  
     var purchasedItemId = item.querySelector(".shopIcon").id;
     purchasedItems.push(purchasedItemId);
     localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems));
    

    alert("Congratulations! You've purchased " + item.getElementsByClassName("details")[0].textContent + ".");
    console.log(purchasedItems)
    if (purchasedImage) {
      purchasedImage.classList.remove("hidden");
    } else {
      console.error("Image not found");
    }
  }

  else if (isItemPurchased(item)) {
    alert("You've already purchased this item.");


    // var purchasedImage = item.querySelector("#tree");
    // if (purchasedImage) {
    //   purchasedImage.style.display = "block";
    // } else {
    //   console.error("Image not found");
    // }


    // var purchasedImageId = document.getElementsByClassName("designImages").id;
    // var purchasedImage = document.getElementById(purchasedImageId);
    // purchasedImage.style.display = "block";
    // console.error("Image not found with ID:", purchasedImageId);
    
  } 

 
  else {
    alert("Sorry, you don't have enough stars to purchase this item.");
  }

 }

 function bush() {
  var purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];
  if (purchasedItems.includes("bush")) {
    console.log(purchasedItems)

    var showBush = document.querySelector("#bush");
    showBush.style.display = "block";

  }
 }

 function tree() {
  var purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];

  if (purchasedItems.includes("tree")) {
    console.log(purchasedItems)

    var showTree = document.querySelector("#tree");
    showTree.style.display = "block";

  }
 }
 function stone() {
  var purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];

  if (purchasedItems.includes("stone")) {
    console.log(purchasedItems)

    var showRock = document.querySelector("#stone");
    showRock.style.display = "block";

  }
 }
 function lake() {
  var purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];

  if (purchasedItems.includes("lake")) {
    console.log(purchasedItems)

    var showTree = document.querySelector("#lake");
    showTree.style.display = "block";

  }
 }

 function berries() {
  var purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];

  if (purchasedItems.includes("berries")) {
    console.log(purchasedItems)

    var showTree = document.querySelector("#berries");
    showTree.style.display = "block";

  }
 }

function isItemPurchased(item) {
  // return item.querySelector(".details").textContent === purchasedItem;
  var itemImageId = item.querySelector(".shopIcon").id;
  return purchasedItems.includes(itemImageId);
}


// function updateImage() {
//   const oldImageElement = document.getElementById("building2");
//   const oldClassElements = document.getElementById("hImage1");

//   if (classicBuildingEnabled) {
//     oldImageElement.src = "quizPages/quizScripts/shopImg/buildingModule.png";
//     oldClassElements.src = "quizPages/quizScripts/shopImg/buildingModule.png";
//   } else {
//     // oldImageElement.src = "homeImg/cloud.png";
//    alert("HATDOGP UTNGINA");
//   }
// }


// function customize() {
//   const classicBuilding = 70; 

//   if (classicBuildingEnabled) {
//     alert("You already have the classic Building!");
//   }
//   else if (user_points >= classicBuilding) {
   
//     user_points -= classicBuilding;
    
//     document.getElementById("starPoints").textContent = user_points;
//     localStorage.setItem("points", user_points);

 
//     // Toggle classicBuilding status
//     classicBuildingEnabled = !classicBuildingEnabled;
//     localStorage.setItem("BuildingClassic", classicBuildingEnabled);
    
//     updateImage();
//   }
//     else {  
  
//     alert("Not enough stars :(");
//   }
// }
// // Add an event listener to listen for changes in the visibility of the page
// document.addEventListener("visibilitychange", function() {
//   // Save the classicBuilding status when the page becomes hidden
//   if (document.visibilityState === "hidden") {
//     localStorage.setItem("BuildingClassic", classicBuildingEnabled);
//   }

// });

// window.addEventListener("load", updateImage);





