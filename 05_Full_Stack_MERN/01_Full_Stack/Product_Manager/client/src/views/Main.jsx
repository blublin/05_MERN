import React, { useState } from 'react';
import Display from '../controllers/Display';
import Form from '../controllers/Form';

const Main = () => {
  const [runEffect, setRunEffect] = useState(false);

  const flipSwitch = () => {
    console.log(`Run Effect Trigger. Before: ${runEffect}`);
    runEffect ? setRunEffect(false) : setRunEffect(true);
  }

  return (
    <fieldset>
        <legend>Main.jsx</legend>
        <Form flipSwitch={flipSwitch}/>
        <Display runEffect={runEffect} flipSwitch={flipSwitch}/>
    </fieldset>
  )
}

export default Main