export const Star = ({ handleClick, isFilled }) => {
    let starIcon = isFilled ? "star-filled.png" : "star-empty.png"

    return (
        <img
            src={`../images/${starIcon}`}
            className="card--favorite"
            onClick={handleClick}
        />
    )
}