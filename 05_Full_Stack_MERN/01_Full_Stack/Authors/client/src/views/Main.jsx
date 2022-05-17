import React from 'react';
import AddAuthorLink from '../components/AddAuthorLink';
import AuthorTable from '../components/AuthorTable';
import Header from '../components/Header';

const Main = (props) => {
  const {runEffect} = props;


  return (
    <fieldset>
        <legend>Main View</legend>
        <Header />
        <AddAuthorLink />
        <AuthorTable runEffect={runEffect}/>
    </fieldset>
  )
}

export default Main