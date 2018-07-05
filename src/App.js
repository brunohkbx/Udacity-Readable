import React from 'react';
import { Route } from 'react-router-dom';
import PostDashboard from './components/PostDashboard';
import PostDetail from './components/PostDetail';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={PostDashboard}/>
      <Route exact path="/:category" component={PostDashboard}/>
      <Route exact path="/:category/:post_id" component={PostDetail}/>
    </div>
  );
}

export default App;
