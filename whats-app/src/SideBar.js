import React from 'react';
import './SideBar.css';
import { Avatar, IconButton } from '@material-ui/core/';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SideBar() {
  return (
    <div className="Sidebar">
      <div className="Sidebar__header">
        <Avatar />
        <div className="Sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="Sidebar__search"></div>
      <div className="Sidebar__chats"></div>
    </div>
  );
}

export default SideBar;
