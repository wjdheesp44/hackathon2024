import { useState, useEffect } from 'react';
import ChatlistComponent from './Chatlist';
import { useNavigate } from 'react-router-dom';

function ChatlistPage(){


    const navigate = useNavigate();
    
    const onClickSearch = () => {

        console.log('click login');

    }



    return (
    <ChatlistComponent
        onClickSearch={onClickSearch}
    ></ChatlistComponent>

    );
}



export default ChatlistPage;