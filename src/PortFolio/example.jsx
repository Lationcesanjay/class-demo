import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

export default function NestingExample() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/topics/rendering">Rendering with React</Link>
        </li>
        <li>
          <Link to="/topics/components">Components</Link>
        </li>
        <li>
          <Link to="/topics/props-v-state">Props v. State</Link>
        </li>
      </ul>

      <Route exact path="/topics">
        <h3>Please select a topic.</h3>
      </Route>
      <Route path="/topics/rendering">
        <Topic topicId="Rendering with React" />
      </Route>
      <Route path="/topics/components">
        <Topic topicId="Components" />
      </Route>
      <Route path="/topics/props-v-state">
        <Topic topicId="Props v. State" />
      </Route>
    </div>
  );
}

function Topic({ topicId }) {
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
