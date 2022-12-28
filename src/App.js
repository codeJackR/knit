import logo from './logo.svg';
import './App.css';
import { ProfileCardCollection } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileCardCollection />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
