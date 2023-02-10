import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';

// import "@ui5/webcomponents/dist/Assets.js";
// import "@ui5/webcomponents-fiori/dist/Assets.js";

import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
setTheme("sap_horizon");

function App() {

  return (
    <div className='container-master'>
      <Header />
      
      <div className='content-master'>
        <Home></Home>
      </div>

      <Footer />
    </div>
  );
}

export default App;
