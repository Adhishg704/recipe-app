import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/Search.css";

function Search() {

    useEffect(() => {
        const searchBtn = document.getElementById('search-btn');
        const mealList = document.getElementById('meal');
        const mealDetailsContent = document.querySelector('.meal-details-content');
        const recipeCloseBtn = document.getElementById('recipe-close-btn');

        // event listeners
        searchBtn.addEventListener('click', Search);
        mealList.addEventListener('click', getMealRecipe);
        recipeCloseBtn.addEventListener('click', () => {
            mealDetailsContent.parentElement.classList.remove('showRecipe');
        });


        function Search() {
            getMealList();
            getCuisineList();

            mealList.innerHTML = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }

        // get meal list that matches with the ingredients
        function getMealList() {
            let searchInputTxt = document.getElementById('search-input').value.trim();
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
                .then(response => response.json())
                .then(data => {
                    let html = "";
                    if (data.meals) {
                        data.meals.forEach(meal => {
                            html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
                        });
                        mealList.classList.remove('notFound');
                    } else {
                        console.log("Failed");
                        return 0;
                    }

                    mealList.innerHTML = html;
                    return 1;
                });
        }


        function getCuisineList() {
            let searchInputTxt = document.getElementById('search-input').value.trim();
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchInputTxt}`)
                .then(response => response.json())
                .then(data => {
                    let html = "";
                    if (data.meals) {
                        data.meals.forEach(meal => {
                            html += `
                <div class = "meal-item" data-id = "${meal.idMeal}">
                    <div class = "meal-img">
                        <img src = "${meal.strMealThumb}" alt = "food">
                    </div>
                    <div class = "meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href = "#" class = "recipe-btn">Get Recipe</a>
                    </div>
                </div>
            `;
                        });
                        mealList.classList.remove('notFound');
                    } else {
                        console.log("Failed");
                        return 0;
                    }

                    mealList.innerHTML = html;
                    return 1;
                });
        }


        // get recipe of the meal
        function getMealRecipe(e) {
            e.preventDefault();
            if (e.target.classList.contains('recipe-btn')) {
                let mealItem = e.target.parentElement.parentElement;
                fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
                    .then(response => response.json())
                    .then(data => mealRecipeModal(data.meals));
            }
        }

        // create a modal
        function mealRecipeModal(meal) {
            console.log(meal);
            meal = meal[0];
            let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
            mealDetailsContent.innerHTML = html;
            mealDetailsContent.parentElement.classList.add('showRecipe');
        }
    }, []); // empty dependency array means this effect runs once after the initial render

    return (
        <>
            <div className="search-container">
                <div className="meal-wrapper">
                    <div className="meal-search">
                        <h2 className="title">Find Meals For Your Ingredients and Cuisines</h2>
                        <div className="meal-search-box">
                            <input type="text" className="search-control" placeholder="Enter an ingredient/cuisine" id="search-input" />
                            <button type="submit" className="search-btn btn" id="search-btn">
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                    <div className="meal-result">
                        <h2 className="title">Your Search Results:</h2>
                        <div id="meal"></div>
                    </div>
                    <div className="meal-details">
                        <button type="button" className="btn recipe-close-btn" id="recipe-close-btn">
                            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                        </button>
                        <div className="meal-details-content"></div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Search;
