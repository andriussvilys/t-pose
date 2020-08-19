import React from 'react'

const ImageBox = (props) => {
    return(
        <div 
        id={props.id}
        className={`ImageBox-wrapper ${props.selected ? "clicked" : ""}`}
        onClick={props.onClick}
        >
            <img data-value={props.value} src={props.src} alt={props.alt || ""} />
        </div>
    )
}

export default ImageBox