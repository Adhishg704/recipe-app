import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Sanjeev Kapoor",
            img: "/img/top-chefs/img_1.jpg",
            recipesCount: "100",
            cuisine: "Indian",
        },
        {
            name: "Vikas Khanna",
            img: "/img/top-chefs/img_2.jpg",
            recipesCount: "75",
            cuisine: "Indian",
        },
        {
            name: "Padma Lakshmi",
            img: "/img/top-chefs/img_3.jpg",
            recipesCount: "60",
            cuisine: "Indian",
        },
        {
            name: "Gordon Ramsay",
            img: "/img/top-chefs/img_4.jpg",
            recipesCount: "50",
            cuisine: "British"
        },
        {
            name: "Nigella Lawson",
            img: "/img/top-chefs/img_5.jpg",
            recipesCount: "40",
            cuisine: "British"
        },
        {
            name: "Masaharu Morimoto",
            img: "/img/top-chefs/img_6.jpg",
            recipesCount: "30",
            cuisine: "Japanese"
        }
    ];
    
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}