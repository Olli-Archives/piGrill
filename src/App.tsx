import React from 'react';
import MainPage from './components/main-page/MainPage'
import './App.css';
import SettingsContextProvider from './contexts/settingsContext';





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
