import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
    const moment = require('moment');
    const tz = require('moment-timezone');
    const time = moment().tz('America/New_York').format('h:mm a');

    let isSentByCurrentUser = false;

    const trimmedName = name.trim();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmedName}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p style={{ position: 'relative', top: '10px', left: '5px', color: '#666' }}>{time}</p>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
                    <p style={{ position: 'relative', top: '10px', left: '5px', color: '#666' }}>{time}</p>
                </div>
            )
    );
}

export default Message;