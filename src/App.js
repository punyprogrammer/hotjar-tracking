import logo from './logo.svg';
import './App.css';
import { hotjar } from 'react-hotjar';

hotjar.initialize("3110257" ,'6');

// Identify the user
hotjar.identify('USER_ID', { userProperty: 'value' });

// Add an event
hotjar.event('button-click');

function App() {
  return (
       <div>
        tracker
       </div>
  );
}

export default App;
