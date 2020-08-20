import React from 'react';
// components
import SidebarChat from './SidebarChat';
// css
import './Sidebar.css';
// Material ui
import { Avatar, IconButton } from '@material-ui/core/';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Sidebar() {
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
      <div className="Sidebar__search">
        <div className="Sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start a new chat" />
        </div>
      </div>
      <div className="Sidebar__chats">
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
