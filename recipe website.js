var search_button = document.getElementById("search_button");
var search_input = document.getElementById("search_input");
var recipe_container = document.getElementById("recipe_container");

search_button.addEventListener("click", function () {
  async function getdata() {
    try {
      let input = search_input.value;

      let json_data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`,
      );

      let data = await json_data.json();

      let meal_arr = data.meals;

      console.log(data.meals);

      recipe_container.replaceChildren();

      for (let i of meal_arr) {
        console.log(i.idMeal);

        let dish_name = document.createElement("h2");
        dish_name.innerText = i.strMeal;
        recipe_container.appendChild(dish_name);
        dish_name.style.padding = "20px";
        dish_name.style.textAlign = "center"
        
        let imagediv = document.createElement("div");
        recipe_container.appendChild(imagediv);
        imagediv.style.padding = "50px";
        imagediv.style.backgroundColor = "#ffffff";
        imagediv.style.display = "flex";
        imagediv.style.justifyContent = "center";
       
        
        let dish_img = document.createElement("img");
        dish_img.setAttribute("src", i.strMealThumb);
        imagediv.appendChild(dish_img);
        dish_img.style.boxShadow = "1px 1px 10px 1px rgba(0,0,0,0.5)";
        dish_img.style.borderRadius = "5px";



        let cuisine = document.createElement("p");
        cuisine.innerText = `Cuisine : ${i.strArea}`;
        recipe_container.appendChild(cuisine);
        cuisine.style.padding = "50px";
        cuisine.style.textAlign = "center";

        
        let instructions = document.createElement("div");
        instructions.style.padding = "20px";
        let instructions_head = document.createElement("h3");
        recipe_container.append(instructions);
        instructions_head.innerText = "instructions";
        instructions_head.style.padding = "20px";
        instructions_head.style.textAlign = "center";
        instructions.appendChild(instructions_head);
        let instructions_text = document.createElement("p");
        instructions_text.innerText = i.strInstructions;
        instructions.appendChild(instructions_text);
        





      

        let ingredients_head = document.createElement("h3");
        ingredients_head.innerText = "Ingredients";
        recipe_container.appendChild(ingredients_head);
        ingredients_head.style.padding = "20px";
        ingredients_head.style.textAlign = "center";
        let ingredients_list = document.createElement("ul");
        recipe_container.appendChild(ingredients_list);

        for (let j = 1; j <= 20; j++) {
          if (i["strIngredient" + j] !== "") {
            let ingredient = document.createElement("li");

            ingredient.innerText = i["strIngredient" + j];

            ingredients_list.appendChild(ingredient);
            ingredients_list.style.textAlign = "center";
          }
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  getdata();
});



