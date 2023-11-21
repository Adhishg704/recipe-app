import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            desc: "A delicious pan pizza topped with flavorful chicken and a medley of fresh ingredients."
        },
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            desc: "Classic spaghetti and meatballs dish, featuring perfectly cooked pasta and savory meatballs."
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            desc: "A flavorful and aromatic Mutton Biryani, showcasing the perfect blend of spices and tender meat."
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            desc: "Exquisite Japanese sushi rolls, featuring fresh seafood and expertly seasoned rice."
        },
        // ... (remaining recipes with titles, images, author images, and now descriptions)
    ].sort(() => Math.random() - 0.5);
    

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}