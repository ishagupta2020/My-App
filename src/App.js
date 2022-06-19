
import { useState } from 'react';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
function App() {
  const[mode,setMode]=useState('light');// whether dark mode is enabled or no

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
}
  }
  return (
    <>
<Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
<div className="container">
<TextForm heading="Enter the text to analyze" mode={mode}/>
</div>
 </>
  );
}

export default App;
