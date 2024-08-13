import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';  
import "./Chatbotpage.css"; 
import folder from '../../assets/folder.png';
import news from '../../assets/news.png';
import hamburger from '../../assets/hamburger.png'
import plus from '../../assets/plus.png'

function ChatbotPage(
    {
    // backgroundImage,
        onClickSearch,
        handleSend,
        handleKeyPress,
        messages,
        input,
        setInput
    }) {

    return (
        
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',

            
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
                <div className="chatBox">
                    {messages.map((message, index) => (
                    <div key={index} className="messageBox"> {/* 메시지 박스 */}
                        <div className="messageText">{message}</div> {/* 메시지 텍스트 */}
                    </div>
                    ))}
                </div>
                <div className="inputContainer">
                    <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress} // Enter 키를 감지하는 이벤트 핸들러
                    className="inputtext"
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