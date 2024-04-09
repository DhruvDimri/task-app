
import './App.css';
import CreateAccount from './components/CreateAccount';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountSetting from './components/AccountSetting'
import Alreadyregister from './components/Alreadyregister';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/create-account" element={<CreateAccount/>} />
      <Route path="/account-setting" element={<AccountSetting/>} />
      <Route path="/Login-Screen" element={<Alreadyregister/>} />
      </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
