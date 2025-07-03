import { BrowserRouter, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
import './index.css';
import Footer from './components/Footer/Footer';

const AppContent = () => {
  const location = useLocation();

  // Exibe o footer em todas as páginas, exceto em /contact
  const hideFooter = location.pathname === '/contact';

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
