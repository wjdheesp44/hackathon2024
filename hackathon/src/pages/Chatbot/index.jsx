import { useState } from 'react';
import ChatbotComponent from './Chatbot';
import { useNavigate } from 'react-router-dom';

function ChatBotPage() {
    const navigate = useNavigate();
    
    const onClickSearch = () => {
        console.log('click login');
    }

    const [messages, setMessages] = useState([]); // 메시지들을 저장하는 상태
    const [input, setInput] = useState(''); // 입력 필드의 상태

    const handleSend = () => {
        if (input.trim() !== '') {
            // 사용자가 보낸 메시지를 추가
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput(''); // 입력 필드를 비움

            console.log(input);
            fetch(`http://127.0.0.1:8000/blog2?query=${input}`, {
                method: "GET",
            }).then(async (res) => {
                let data = await res.json();
                console.log(data);

                data.items.forEach((item, index) => {
                    let contentR = item.description;
                    let keywordR = item.keywords;
                    let labelR = item.label;

                    const combinedMessage = `
                    항목 ${index + 1}: ->
                    내용: ${contentR}
                    키워드: ${keywordR.join(', ')}
                    감정 분석: ${labelR}\n
                    `;

                    // 서버가 보낸 메시지를 추가
                    setMessages(prevMessages => [...prevMessages, { text: combinedMessage.trim(), sender: 'server' }]);
                });
            })
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend(); // Enter 키를 눌렀을 때 메시지를 전송
        }
    };

    return (
        <div>
            <ChatbotComponent
                onClickSearch={onClickSearch}
                handleSend={handleSend}
                handleKeyPress={handleKeyPress}
                messages={messages}
                input={input}
                setInput={setInput}
                setMessages={setMessages}
            ></ChatbotComponent>
        </div>
    );
}

export default ChatBotPage;
