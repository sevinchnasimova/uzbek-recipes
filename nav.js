const navElement = await fetch("./nav.html")
  .then((response) => response.text())
  .then((html) => {
    const parser = new DOMParser();
    return parser.parseFromString(html, "text/html").querySelector("nav");
  });

// console.log(navElement);

const bodyElement = document.querySelector("body");
bodyElement.before(navElement);





// // rating system
// document.addEventListener("DOMContentLoaded", function () {
//   let ratings = [];
//   let selectedRating = 0;

//   //updates the star colors 
//   function updateStars(rating) {
//     const stars = document.querySelectorAll('.star');
//     stars.forEach((star, index) => {
//       star.style.color = index < rating ? 'gold' : 'gray'; 
//     });
//   }


//   const stars = document.querySelectorAll('.star');
//   stars.forEach(star => {
//     star.addEventListener('click', function () {
//       selectedRating = parseInt(this.getAttribute('data-value')); 
//       updateStars(selectedRating); 
//     });
//   });

 
//   document.getElementById("submit-rating-btn").addEventListener("click", function () {
//     if (selectedRating > 0 && selectedRating <= 5) {
//       ratings.push(selectedRating); // stores the rating

//       // calculates the average rating
//       const averageRating = (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(1);
//       document.getElementById('rating').innerText = `Average Rating: ${averageRating} (${ratings.length} ratings)`;
      
//       // resets the selected rating and updates stars
//       selectedRating = 0;
//       updateStars(0);
//     } else {
//       alert('Please select a star rating.');
//     }
//   });
// });




// function showDropdown() {
//   const dropdown = document.getElementById('dropdown');
//   dropdown.style.display = 'block'; // Show the dropdown
// }

// function hideDropdown() {
//   const dropdown = document.getElementById('dropdown');
//   dropdown.style.display = 'none'; // Hide the dropdown
// }

// function searchRecipes() {
//   const input = document.getElementById('searchBar').value.toLowerCase();
//   const dropdown = document.getElementById('dropdown');
//   const recipes = dropdown.getElementsByTagName('li');

//   for (let i = 0; i < recipes.length; i++) {
//       const recipe = recipes[i].textContent.toLowerCase();
//       if (recipe.includes(input)) {
//           recipes[i].style.display = ''; // Show the recipe
//       } else {
//           recipes[i].style.display = 'none'; // Hide the recipe
//       }
//   }
// }