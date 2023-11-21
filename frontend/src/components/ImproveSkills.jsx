import { Link } from "react-router-dom";

export default function ImproveSkills() {
    const list = [
        "Search recipes by ingredients or cuisine",
        "Save your favorite recipes",
        "Create an account and log in",
        "Sign up to unlock personalized themes",
        "Access nutrition facts for recipes",
        "Discover cooking tips and tricks",
    ];

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Elevate your culinary experience</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn"><Link to="/signup" className="text-white">signup now</Link></button>
            </div>
        </div>
    )
}