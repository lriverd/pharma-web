import './App.css';
import { PharmacyListPage } from './pages/PharmacyListPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)

function App() {
  return (
    <PharmacyListPage />
  );
}

export default App;
