
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import NaviBar from './Components/NaviBar';
import AboutPage from './Pages/AboutPage';
import ArticlePage from './Pages/ArticlePage';
import ArticlesList from './Pages/ArticlesList';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
    <div className='App'>
<Router>
  
    
<NaviBar />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="/articles-list" element={<ArticlesList />} exact />
        <Route path="/article/:name" element={<ArticlePage />} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
