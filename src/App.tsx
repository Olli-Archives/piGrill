import React from 'react';
import logo from './logo.svg';
import MainPage from './components/main-page/MainPage'


import './App.css';
import SettingsContextProvider from './contexts/settingsContext';

// const App: React.FC = () => {
//   return (

//     <div className="App">
//       <MainPage />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <SettingsContextProvider>
        <MainPage />

      </SettingsContextProvider>
    </div>
  )

}

export default App;
