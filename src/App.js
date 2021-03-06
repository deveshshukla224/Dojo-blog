import Navbar from './Navbar';
import Home from './Home';
import{BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Create from './Create';
import React from "react";
import BlogDetails from "./blogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/create">
          <Create></Create>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
