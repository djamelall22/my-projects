import React from 'react';

// css
import './SidebarChat.css';
// Material ui
import { Avatar } from '@material-ui/core/';

function SidebarChat() {
  return (
    <div className="SidebarChat">
      <Avatar />
      <div className="SidebarChat__info">
        <h2>Room name</h2>
        <p>last message...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
