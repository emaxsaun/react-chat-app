import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users, room }) => (
  <div className="textContainer">
    <div>
      <h1>Chat<span role="img" aria-label="emoji">💬</span></h1>
      <h2>Uses React/Express/Node/Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Start chatting! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Room Name:</h1>
            <div>
              <h2>{room}</h2>
            </div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;