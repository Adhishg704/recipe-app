import CustomImage from "./CustomImage";
import { Link } from "react-router-dom";

export default function HeroSection() {
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ];

    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Welcome to Culinary Compass</h1>
                <p className="info">
                    Culinary Compass is your passport to a world of diverse and delectable cuisines. Embark on a culinary adventure, exploring recipes that will tantalize your taste buds from various corners of the globe. Our service is provided to you at no cost. So, start your journey of flavor discovery now.
                </p>
                <button className="btn"><Link to = "/recipes" className= "text-white">explore now</Link></button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                ))}
            </div>
        </div>
    );
}
