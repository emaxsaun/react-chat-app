import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim();
    let timestamp = new Date();
    timestamp = timestamp.toLocaleString();
    timestamp = timestamp.split(',')[1];

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmedName}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(text)} -<i style={{color: '#eee'}}>{timestamp}</i></p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)} -<i style={{color: '#333'}}>{timestamp}</i></p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
                </div>
            )
    );
}

export default Message;