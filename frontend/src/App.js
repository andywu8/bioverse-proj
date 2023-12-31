
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Panel from './components/Panel';
import TicketSupport from './components/TicketSupport';
function App() {
  return (
    <div className="App">  
    <Router>
      <ul>
        <li>
          <Link to="/ticket_support">Ticket Support</Link>
        </li>
        <li>
          <Link to="/panel">Panel</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path='/panel' element={< Panel />}></Route>  
        <Route exact path='/ticket_support' element={< TicketSupport />}></Route>  
      </Routes>
    </Router>
    </div>
  );
}

export default App;
