import React from 'react'

const ImageBox = (props) => {
    return(
        <div 
        className="ImageBox-wrapper"
        onClick={props.onClick}
        >
            <img data-value={props.value} src={props.src} alt={props.alt || ""} />
        </div>
    )
}

export default ImageBox