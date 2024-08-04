import React, { useContext } from 'react';
import '../styles/Chatbox.css';

import Userresponse from './Userresponce';
import Godresponse from './Godresponce';
import { ChatContext } from '../context/ChatContext';


export default function Components() {
   const { messages } = useContext(ChatContext);


   return (
      <div className="chatbox_container_section">
         <div className="no_chat_text">
            <p>Not <br />For Beginners</p>
         </div>

         <div className="chats_container">
            {messages.map((chat, index) => {
               if (chat.type === 'user') {
                  return <Userresponse key={index} response={chat.response} />;
               } else if (chat.type === 'god') {
                  return <Godresponse key={index} response={chat.response} />;
               }
               return null;
            })}
         </div>
      </div>
   );
}
