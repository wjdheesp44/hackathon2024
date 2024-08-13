import { useState, useEffect } from 'react';
import ChatbotComponent from './Chatbot';
import { useNavigate } from 'react-router-dom';

function ChatBotPage(){


    const navigate = useNavigate();
    
    const onClickSearch = () => {

        console.log('click login');

    }

    const [messages, setMessages] = useState([]); // 메시지들을 저장하는 상태
    const [input, setInput] = useState(''); // 입력 필드의 상태

    const handleSend = () => {
    if (input.trim() !== '') {
        setMessages([...messages, input]); // 새로운 메시지를 기존 메시지 리스트에 추가
        setInput(''); // 입력 필드를 비움
    }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSend(); // Enter 키를 눌렀을 때 메시지를 전송
        }
    };

    return (
    <ChatbotComponent
        onClickSearch={onClickSearch}
        handleSend={handleSend}
        handleKeyPress={handleKeyPress}
        messages={messages}
        input={input}
        setInput={setInput}
    ></ChatbotComponent>

    );
}



export default ChatBotPage;