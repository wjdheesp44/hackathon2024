import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';  
import "./Chatbotpage.css"; 
import folder from '../../assets/folder.png';
import news from '../../assets/news.png';
import hamburger from '../../assets/hamburger.png'
import plus from '../../assets/plus.png'
import News from './response';

function ChatbotPage(
    {
    // backgroundImage,
        onClickSearch,
        handleSend,
        handleKeyPress,
        messages,
        input,
        setInput,
        setMessages
    }) {


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '850px', //->채팅 결과 표시 값 높이
            overflow: 'visible'

            
            }}>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '21.25rem',
                marginTop: '5rem',
                position: 'fixed',
                top: '0rem'
            }}>
                <img className="hamburger" src={plus}></img>

                <img className="hamburger" src={hamburger}></img>
            </div>

            {/* <div className="container">
                <div className="chatBox">
                    {messages.map((message, index) => (
                    <div key={index} className="message">
                        {message}
                    </div>
                    ))}
                </div>
                <div className="inputContainer">
                    <input type='text' className="inputtext" value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder={'메시지를 입력하세요'}></input>
                    
                </div>
            </div> */}
            <div className="container">
                <div className="chat-container">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.sender}`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="inputContainer">
                    <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress} // Enter 키를 감지하는 이벤트 핸들러
                    className="inputText"
                    placeholder="메시지를 입력하세요"
                    />
                </div>
            </div>
            


            
            {/* <div className="line"></div> */}
            {/* <input type='text' className="inputtext" placeholder={'메시지를 입력하세요'}></input> */}
        </div>
    );
}

export default ChatbotPage;