export default function Footer() {
    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">CulinaryCompass.com</p>
                <p>CulinaryCompass is your global culinary guide, offering a diverse array of recipes from around the world. Explore the rich tapestry of flavors, from the aromatic spices of Indian cuisine to the savory delights of Italian pasta. Indulge your taste buds in a gastronomic journey that transcends borders. Our service is provided to you at no cost..</p>
                <p>&copy; {new Date().getFullYear()} | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>info@culinarycompass.com</p>
                <p>+91-9876-543210</p>
                <p>Bangalore, India</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
    );
}
