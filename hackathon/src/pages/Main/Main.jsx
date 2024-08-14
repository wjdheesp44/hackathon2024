import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';  
import "./Mainpage.css"; 
import folder from '../../assets/folder.png';
import news from '../../assets/news.png';
import hamburger from '../../assets/hamburger.png';
import x from '../../assets/x.png' ;
import Header from '../../components/Header';
import News from '../Chatbot/response';

function MainPage(
    {
    // backgroundImage,
        onClickSearch,
        formattedDate,
        toggleMenu,
        menuOpen,
        setMenuOpen
    }) {

    return (
        
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',

            
            // height: '100vh'
            }}>

            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '21.25rem',
                marginTop: '5rem'
            }}>
                {/* <img className="hamburger" src={hamburger}></img>
                 */}
                <img
                    className="hamburger"
                    src={menuOpen ? x : hamburger}
                    alt="Menu"
                    onClick={toggleMenu}
                />
                {menuOpen && <Header toggleMenu={toggleMenu} />} 

            </div>

            




            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '21.25rem',
                height: '7rem',
                flexDirection: 'column'

            }}>
                <div className="text1">언론,</div>
                <div className="text2">다양한 시각, 균형 잡힌 언론</div>
                <div className="datetext">{formattedDate}</div>
            </div>


            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '21.25rem',
                height: '19.16rem',

            }}>
                

                

                <div className="box1">
                    {/* <img className="folder" src={folder}></img>
                    <img className="news" src={news}></img> */}
                    <div className="text">“다양한 시각을 위한 첫걸음"</div>
                    <button type='button' className="box" onClick={onClickSearch} style={{
                        cursor: 'pointer'
                    }}>
                        <div className="rectangle">챗봇과 대화하기</div>    
                    </button>
                </div>
            </div>

            {/* <div style={{
                display: 'flex',}}
            > */}
                <div className="todaytext" style={{
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}>오늘의 언론</div>
                <News />
            

                

                {/* <div className="box2" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '8.5rem',
                    position: '0rem',
                    marginBottom: '0.8rem'}}> 
                    
                </div>

                <div className="box2" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '8.5rem',
                    position: '0rem',
                    marginBottom: '1rem'}}> 
                    
                </div>

                
                <div className="box2" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '8.5rem',
                    position: '0rem',
                    marginBottom: '1rem'}}> 
                    
                </div> */}
            {/* </div> */}
{/*         
        <div className="box">
        <div className="rectangle" />
        </div> */}


        </div>
    );
}

export default MainPage;