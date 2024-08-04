import React from 'react';
import '../styles/Sidebar.css';
import data from '../assets/data';

export default function components() {

   return (

      <>
         <div className="sidebar_container">
            <div className="sidebar_container_icons">
               <img src={data.sidebar} alt="" />
               <img src={data.newchat} alt="" />
            </div>
            <div className="sidebar_container_newchat sidebar_container_toggle_style">
               <p>New chat</p>
               <img src={data.add} alt="" />
            </div>
            <div className="history_container_section">
               <div className="sidebar_container_history sidebar_container_toggle_style">
                  <p>Tell me a jock Explained</p>
               </div>
               <div className="sidebar_container_history sidebar_container_toggle_style">
                  <p>Tell me a jock Explained</p>
               </div>
            </div>
            <div className="sidebar_container_userprofile sidebar_container_toggle_style">
               <img src={data.user} alt="" />
               <p>Buddhadeb Koner</p>
            </div>
         </div>
      </>

   )
}