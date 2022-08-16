import logo from './logo.svg';
import './App.css';
import { hotjar } from 'react-hotjar';
import {useEffect} from 'react'

// hotjar.initialize("3110257" ,'6');
// hotjar.identify('USER_ID', { userProperty: 'value' });
// hotjar.event('button-click');

function App() {
  useEffect(()=>{
   hotjar.initialize(3110257,6)
  },[])
  return (
       <div>
        tracker
       </div>
  );
}

export default App;
