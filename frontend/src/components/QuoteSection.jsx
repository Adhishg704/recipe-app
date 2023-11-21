import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QouteSection() {
    return (
        <div className="section quote">
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft} /> Cooking is an art, but all art requires knowing something about the techniques and materials.</p>
            <p className="qoute-author">- Sanjeev Kapoor</p>

        </div>
    )
}