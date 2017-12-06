import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <main>
      <Switch>
        <Route path="/" exact />
        <Route path="/" component={HomePage} />
        <Route path="/users" component={UsersPage} />
      </Switch>
    </main>
  </div>
)

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

const app = document.getElementById('app')

ReactDom.render(<App />, app);
