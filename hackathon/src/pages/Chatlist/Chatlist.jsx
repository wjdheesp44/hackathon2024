import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';  
import "./Chatlistpage.css"; 
import folder from '../../assets/folder.png';
import news from '../../assets/news.png';
import hamburger from '../../assets/hamburger.png'
import plus from '../../assets/plus.png'

function ChatlistPage(
    {
    // backgroundImage,
        onClickSearch
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
                marginTop: '5rem'
            }}>
                <img className="hamburger" src={plus}></img>
                <img className="hamburger" src={hamburger}></img>

            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '20.4375rem',

                color: '#090A0A',
                fontSize: '1rem',
                fontWeight: 700,
                lineHeight: '1rem',
                fontFamily: 'GmarketSansTTFBold',
                marginLeft: '0.75rem',
                marginBottom: '1.5rem'
            }}>지난 채팅</div>

            


            
            {/* <div className="line"></div> */}
            <input type='text' className="inputtext" placeholder={'메시지를 입력하세요'}></input>


        </div>
    );
}

export default ChatlistPage;