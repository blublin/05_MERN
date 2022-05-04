import React from 'react';
import './App.css';
import styles from './Components/css/Master.module.css'
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
import MRow from './Components/MRow';

function App() {
  return (
    <div className={styles.container }>
      <Header />
      <MRow>
        <Navigation />
        <Main>
            <MRow>
              <SubContents />
              <SubContents />
              <SubContents />
            </MRow>
            <Advertisement />
        </Main>
      </MRow>
</div>
  );
}

export default App;

