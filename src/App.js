import logo from './logo.svg';
import './App.css';
import { ProfileCardCollection, NavBar } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ProfileCardCollection />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
