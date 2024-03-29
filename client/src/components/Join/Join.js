import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join Chat</h1>
                <div><input placeholder="Enter Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <div><input placeholder="Room" style={{ display: 'none' }}className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                {/* <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div> */ }
                {/* <Link onClick={event => (!name || !room ? event.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}> */ }
                <Link onClick={event => (!name ? event.preventDefault() : null)} to={`/chat?name=${name}&room=General Chat`}>
                    <button className="button mt-20" type="submit">Join</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;