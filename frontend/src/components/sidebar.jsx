import React from "react";
import instagramLogo from "../assets/images/Logo-Instagram.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar border-2 p-10 h-[950px] sticky top-0 md:block hidden">
        <div className="logo">
          <img src={instagramLogo} alt="" srcset="" className="w-[120px]" />
        </div>
        <div className="flex flex-col gap-y-8 my-10">
          <Link to="/home">
            <div className="item-1">Home</div>
          </Link>
          <div className="item-1">Search</div>

          <div className="item-1">Explore</div>

          <div className="item-1">Reels</div>

          <div className="item-1">Messages</div>

          <div className="item-1">Notifications</div>
          <Link to="/create">
            <div className="item-1">Create</div>
          </Link>

          <Link to="/profile">
            <div className="item-1">Profile</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;