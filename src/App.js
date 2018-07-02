import React from 'react';
import { Route } from 'react-router-dom';
import AppHeader from './components/AppHeader'
import PostDashboard from './components/PostDashboard';

const App = () => {
  return (
    <div>
      <AppHeader />
      <Route exact path="/" component={PostDashboard}/>
      <Route exact path="/:category" component={PostDashboard}/>
    </div>
  );
}

export default App;
