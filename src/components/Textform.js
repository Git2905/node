import React, { useState } from 'react';

import PropTypes from "prop-types"

function Textform(props) {
    const [text, setText] = useState(() => "Enter text here");

    const handleOnTextChange = (event) => {
        setText(event.target.value);
    };

    const handleOnButtonUpperClick = () => {
        setText(text.trim().toUpperCase());
    };

    const handleOnButtonLowerClick = () => {
        setText(text.trim().toLowerCase());
    };

    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea value={text} onChange={handleOnTextChange} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleOnButtonUpperClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleOnButtonLowerClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.trim().split(/\s+/).filter(w => w !== "").length} words and {text.trim().length} characters</p>
                <p>{0.008 * text.trim().split(/\s+/).filter(w => w !== "").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string.isRequired
}

Textform.defaultProps = {
    heading: "Set label text here"
}

export default Textform