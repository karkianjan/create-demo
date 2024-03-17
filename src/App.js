// import logo from './logo.svg';
import './App.css';
// import Liftingup from './lifting/liftingup';
import Parent from './lifting/parent';
import Count from './function based/count';
import { FriendStatus } from './hooks\'/friendStatus';
import { FriendUpdate } from './hooks\'/friendupdate';
import {ThemeContext} from './context/themecontext';
import { useContext, useState } from 'react';
import FormFocus from './hooks\'/focusoninput';
import API from './API/apiget';
import Apiput from './API/apiput';
import Posts from './component/posts';

function App() {
  const theme = useContext(ThemeContext);
  const [mode, setMode] = useState(theme);

  return (
    <div className="App">
     <API/>
     <Apiput/>
            <FormFocus/>
            <Parent/>
           <Count/>
           <FriendStatus/>
           <FriendUpdate/>
           
           <ThemeContext.Provider value={mode}>
           <button onClick={()=> setMode(mode === 'light' ? 'dark' : 'light')} className={`btn-${mode}`}>Dark Mode</button>
           
           {/* <Form/> */}
           </ThemeContext.Provider>


<Posts/>
    </div>
  );
}

export default App;
