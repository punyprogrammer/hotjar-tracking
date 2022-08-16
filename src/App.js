import logo from './logo.svg';
import './App.css';
import { hotjar } from 'react-hotjar';
import {useEffect} from 'react'

// hotjar.initialize("3110257" ,'6');
// hotjar.identify('USER_ID', { userProperty: 'value' });
// hotjar.event('button-click');

function App() {
  useEffect(()=>{
    hotjar.initialize(3110257, 6);

    // Identify the user
    // hotjar.identify('USER_ID', { userProperty: 'value' });
    
    // Add an event
    // hotjar.event('button-click');
    console.log('hotjar initialized')
    
  },[])
  return (
       <div  style={{width:"100vw",height:"100vh",backgroundColor:"cyan"}}> 
        tracker
       </div>
  );
}

export default App;
