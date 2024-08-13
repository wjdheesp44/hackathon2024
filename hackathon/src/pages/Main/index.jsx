import { useState, useEffect } from 'react';
import MainComponent from './Main';
import { useNavigate } from 'react-router-dom';

function MainPage(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };


    const navigate = useNavigate();
    
    const onClickSearch = () => {

        console.log('click login');

    }

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    
    const formattedDate = `${year}년 ${month}월 ${date}일`;
    
    console.log(formattedDate); // 예: "2024년 8월 14일"
    



    return (
    <MainComponent
        onClickSearch={onClickSearch}
        formattedDate={formattedDate}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
    ></MainComponent>

    );
}



export default MainPage;