import React from 'react';
import me from './Assets/me.JPG';
import classes from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <React.Fragment>
      <div className={classes.App}>
        <NavBar />
        <div
          className={classes.AppBody}
          style={
            {
              maxWidth: '100%',
              height: 'auto',
              position: 'relative',
              overflow: 'scroll',
              paddingBottom: '100px',
              paddingTop: '100px',
              alignItems: 'center'
            }
          }
        >
            <img
              src={me}
              style={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%',
                verticalAlign: 'middle',
                padding: '10px 20px',
                overflow: 'auto',
                position: 'visible'
                }
              }
            />
          <div
            style={{
              textAlign: 'center',
              display: 'block',
              margin: '40px',
            }}
          >
          <h4>About Me </h4>
          <p>
            I'm a Tar Heel Alum with a B.S. in Business Administration, self-taught coding skills, and a passion for product management. Over drinks, I can talk for hours about books, music, travel, and technology, the last of which is where I'm dedicated work-wise.  
          </p>
          <p>
            I have spent the last few years on a deep dive into blockchain technology. I worked as a Product Manager for <a
              href="https://www.hydrogenplatform.com/"
            >
                Hydrogen
            </a>
            /
            <a
              href='https://projecthydro.org/'
            >
              Project Hydro
            </a> where I learned how to construct secure, user-friendly blockchain product workflows and Co-Authored <a
              href='https://erc1484.org/'
            >
              ERC 1484
            </a>. I'm currently a freelance product and engineering consultant.  
          </p>
          <p>
              Before working in tech, I've been a consultant for EY, a camp counselor at Robert College in Istanbul, a helper at a llama farm, and much more!
          </p>
          <p>
            In my spare time, I like to play chess or basketball, go camping, and cook Indian food.
          </p>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
