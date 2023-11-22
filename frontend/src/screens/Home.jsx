import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';

function Home() {

    const recipeData = [
        {
            id: 'recipe1',
            title: 'Chocolate Tart',
            image: '/img/recipes/recipe1.jpg',
            authorImg: "/img/top-chefs/img_1.jpg",
            desc: 'Indulge in the rich and decadent world of chocolate with this exquisite Chocolate Tart. A perfect balance of sweetness and cocoa goodness.',
        },
        {
            id: 'recipe2',
            title: 'Pancake Delight',
            image: '/img/recipes/recipe2.jpg',
            authorImg: "/img/top-chefs/img_2.jpg",
            desc: 'Start your day with a delightful stack of pancakes. Fluffy, light, and topped with your favorite syrup, it\'s the perfect breakfast treat.',
        },
        {
            id: 'recipe3',
            title: 'Grilled Cheese Tomato Soup',
            image: '/img/recipes/recipe3.jpg',
            authorImg: "/img/top-chefs/img_3.jpg",
            desc: 'Warm up on a chilly day with the classic combination of Grilled Cheese and Tomato Soup. The gooey cheese and savory soup make a comforting pair.',
        },
        {
            id: 'recipe4',
            title: 'Cheesy Chicken Delight',
            image: '/img/recipes/recipe4.jpg',
            authorImg: "/img/top-chefs/img_4.jpg",
            desc: 'Savor the flavors of perfectly cooked chicken smothered in a rich and cheesy sauce. This recipe is a delightful journey for your taste buds.',
        },
        {
            id: 'recipe5',
            title: 'Mixed Veg Fried Rice',
            image: '/img/recipes/recipe5.jpg',
            authorImg: "/img/top-chefs/img_5.jpg",
            desc: 'Explore the culinary world with this Mixed Veg Fried Rice. Bursting with colorful veggies, it is a delicious and wholesome dish for any occasion.',
        },
        {
            id: 'recipe6',
            title: 'Apple Pudding Bliss',
            image: '/img/recipes/recipe6.jpg',
            authorImg: "/img/top-chefs/img_6.jpg",
            desc: 'Experience the bliss of a sweet and comforting Apple Pudding. This dessert is a perfect blend of warm spices and the natural sweetness of apples.',
        },
    ];

    const [username, setUsername] = useState("");

    const getUsername = async (id) => {
        const response = await fetch("https://recipe-app-api-six.vercel.app/recipe-app/api/v1/user/getName", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id}),
            credentials: "include"
        });

        const json = await response.json();
        if(json.userName) {
            setUsername(json.userName.name);
        }
    }

    useEffect(() => {
        const userID = window.localStorage.getItem("userID");
        if(userID) {
            getUsername(userID);
        }
    }, [])

    return (
        <div className="recipes-container">
            {
                (username !== "")? (
                    <h1 className='title'>Welcome back, {username}</h1>
                ):
                ""
            }
            {recipeData.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
            ))}
        </div>
    );
}

export default Home;