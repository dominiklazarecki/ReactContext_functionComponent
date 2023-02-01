import  AppProvider  from './AppContext';

import InfoUser from './InfoUser'
import Button from './Button'

import './App.css';

const App = () => {
  return (
    <div>
      <AppProvider>
        <InfoUser />
        <Button />
      </AppProvider>
    </div>
  );
}

export default App;
