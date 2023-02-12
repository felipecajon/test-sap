import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import '@ui5/webcomponents-react/dist/Assets';

function App() {
  return (
    <div className='container-master'>
      <Header/>
      
      <div className='content-master'>
        <Home/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
