import { BrowserRouter, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
import './index.css';
import Footer from './components/Footer/Footer';

const AppContent = () => {
  const location = useLocation();

  // Exibe o footer apenas na home
  const hideFooter = location.pathname === '/contact' || location.pathname === '/projects' || location.pathname === '/about';

  return (
    <>
      <Header />
      <AppRoutes />
      {!hideFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
