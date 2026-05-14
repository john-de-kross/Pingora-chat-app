import React from "react";
import WelcomeLayout from "./welcomeLayout";
import { ChatInterface } from "./chatInt";




const ChatLayout = ()=> {
    const isSelectedChat = true
    return (
        isSelectedChat ? (
            <ChatInterface />

        ) : (
            <WelcomeLayout />
        )
       

    )
}
export default ChatLayout;