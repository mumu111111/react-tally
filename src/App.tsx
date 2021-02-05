import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';

require('icons/tag.svg');

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;  
`

const Nav = styled.nav`
  border: 1px solid #000;
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align:center;
      padding: 16px;
    }
  }  
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from="/" to="/money" />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>
        <Nav>
          <ul>
            <li>
              <svg className="icon">
                <use xlink:href="#tag" />
              </svg>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>



      </Wrapper>
    </Router>
  );
}

function Tags() {
  return (
    <div>tags</div>
  )
}
function Money() {
  return (
    <div>Money</div>
  )
}



function Statistics() {
  return (
    <div>Statistics</div>
  )
}

function NoMatch() {
  return (
    <div>页面不存在</div>
  )
}

export default App;
