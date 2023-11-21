import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function PreviousSearches(){
    const cuisines = ['Indian', 'Chinese', 'Japanese', 'Italian', 'Korean', 'Spanish', 'Thai', 'Vietnamese', 'American', 'Mexican', 'Middle Eastern', 'Greek', 'German']; 

    return (
        <div className="previous-searches section">
            <h2>Select Cuisine</h2>
            <div className="previous-searches-container">
                { cuisines.map((cuisine, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {cuisine}
                </div>)) }
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search ..." />
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}