import React from 'react';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import Appbar from './components/Appbar';
import Profile from './components/Profile';
import Entry from './components/Entry';
import Details from './components/Details';
import Error from './components/Error';
import Home from './components/Home';
import Detail from './components/Detail';

import Store from './components/Store';
import Cart from './components/Cart';
import Shop from './components/Shop';
import SendMail from './components/SendMail';
import ThemeToggleBtn from './components/ThemeToggleBtn';



function App({ store }) {
  const renderPage = () => {
    const role = localStorage.getItem("role");
    const NavReducer = store.getState().NavReducer;

    switch (NavReducer) {
      case "Login":
        return <Login store={store} />;
      case "Registration":
        return <Registration />;
      case "Home":
        return <Home />;
      case "SendMail":
        return <SendMail />;
      case "Cart":
        return <Cart />;
      case "Profile":
        return role === "1" ? <Profile /> : <Error />;
      case "Entry":
        return role === "1" ? <Entry /> : <Error />;
      case "Details":
        return (role === "1" || role === "2") ? <Details /> : <Error />;
      case "Detail":
        return (role === "1" ) ? <Detail /> : <Error />;
      case "Shop":
        return role === "1" ? <Shop /> : <Error />;
      case "Store":
        return (role === "1" || role === "2") ? <Store /> : <Error />;
      default:
        return null; // Return null for cases where there's no match
    }
  };

  return (
    <div className="App">
      <div className="App-body">
        <Appbar store={store} />
         
        <center>{renderPage()}</center>
        <ThemeToggleBtn />
       

      </div>
    </div>
  );
}

export default App;