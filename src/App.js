import React from 'react';
import me from './Assets/me.JPG';
import classes from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import AppBody from './components/Body/AppBody';

function App() {
  return (
    <React.Fragment>
      <div className={classes.App}>
        <NavBar />
        <AppBody />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
