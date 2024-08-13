import logo from './logo.svg';
import MainPage from './pages/Main';
import ChatbotPage from './pages/Chatbot';
import ChatlistPage from './pages/Chatlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (

    
    <div className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',  // 가로 너비를 100%로 설정하여 화면 크기에 맞게 조정
        maxWidth: '24.5625rem',  // 최대 너비를 고정하여 너무 커지지 않도록 설정
        height: 'auto',  // 비율을 유지하면서 높이를 자동으로 조정
        paddingBottom: '216.67%',  // 비율을 유지하도록 패딩을 설정
        flexShrink: '0',
        background: 'linear-gradient(180deg, #767AC9 4.98%, #A5A8DC 18.56%, #FFF 49.58%)',
        backgroundSize: '100% auto',
        position: 'relative',  // 자식 요소들이 비율 내에 배치될 수 있도록 설정
        overflow: 'hidden',
        margin: '0 auto',  // 화면 중앙에 배치
        maxWidth: '393px',
        // marginLeft: auto
    }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/chatlist" element={<ChatlistPage />} />
      </Routes>
    </div>


  );
}

export default App;
