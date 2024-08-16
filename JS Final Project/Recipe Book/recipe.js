document.getElementById('searchBtn').addEventListener('click', function () {
  const search = document.getElementById('searchItem').value.trim();

  if (!search) {
    alert('Please enter a search term.');
    return;
  }

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((json) => {
      console.clear();
      console.log(json);

      let mainDiv1 = document.getElementById('mainDiv');
      mainDiv1.innerHTML = '';

      if (json.meals) {
        json.meals.forEach((meal) => {
          let recipeDiv = document.createElement('div');
          recipeDiv.className = 'item_div';
          recipeDiv.innerHTML = `
                      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                      <div class="item_content">
                          <h2 id="text">${meal.strMeal}</h2>
                          <p><strong>Tags:</strong> ${meal.strTags || 'N/A'}</p>
                          <p><strong>Category:</strong> ${meal.strCategory}</p>
                          <p><strong>Area:</strong> ${meal.strArea}</p>
                          <p><strong>Ingredients:</strong></p>
                          <ul class="ingredients">
                              ${Object.keys(meal)
                                .filter(
                                  (key) =>
                                    key.startsWith('strIngredient') && meal[key]
                                )
                                .map((key) => `<li>${meal[key]}</li>`)
                                .join('')}
                          </ul>
                          <input type="text" class="input_box" />
                          <button class="btn btn-edit">Edit</button>
                          <button class="btn btn-update">Update</button>
                          <button class="btn btn-delete">Delete</button>
                      </div>
                  `;

          const input1 = recipeDiv.querySelector('.input_box');
          const editButton = recipeDiv.querySelector('.btn-edit');
          const updateButton = recipeDiv.querySelector('.btn-update');
          const deleteButton = recipeDiv.querySelector('.btn-delete');

          editButton.addEventListener('click', function () {
            input1.value = meal.strMeal;
            input1.style.display = 'block';
          });

          updateButton.addEventListener('click', function () {
            const new_value = input1.value.trim();
            if (new_value) {
              recipeDiv.querySelector('#text').innerText = new_value;
              input1.style.display = 'none';
            } else {
              alert('The meal name cannot be empty.');
            }
          });

          deleteButton.addEventListener('click', function () {
            if (confirm('Are you sure you want to delete this recipe?')) {
              recipeDiv.remove();
            }
          });

          mainDiv1.append(recipeDiv);
        });
      } else {
        mainDiv1.innerHTML =
          "<p class='text-xl text-red-500'>No results found. Please try a different search term.</p>";
      }
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
      document.getElementById('mainDiv').innerHTML =
        "<p class='text-xl text-red-500'>An error occurred. Please try again later.</p>";
    });
});
