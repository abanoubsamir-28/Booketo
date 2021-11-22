import React, { useState } from "react";
import Picker from "emoji-picker-react";
import "./createpost.css";
const Createpost = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };
    return (
        <>
            <div class="input-group input-group-lg w-100">
                <textarea
                    type="text"
                    className="w-100 post-share-input p-3 shadow rounded-3"
                    placeholder="What's on your mind ? "
                />
            </div>
            <button className="btn post-share-button">Share
            </button>
        </>
    );
};

export default Createpost;
