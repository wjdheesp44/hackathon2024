// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // 스타일은 이 파일에서 관리

function Header({ toggleMenu }) {

    return (
    
        <div className="menu open">
            <ul>
            
            <li>
                <Link to="/" onClick={toggleMenu}>웹 둘러보기</Link>
            </li>
            <li>
                <Link to="/chatlist" onClick={toggleMenu}>채팅 목록</Link>
            </li>
            <li>
                <Link to="/chatbot" onClick={toggleMenu}>챗봇과 대화하기</Link>
            </li>
            </ul>
        </div>
    );
}

export default Header;
