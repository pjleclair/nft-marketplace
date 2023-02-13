import "./App.css"
import Sidebar from "./components/sidebar/sidebar"
import Header from "./components/header/header"
import Dashboard from "./components/dashboard/dashboard"
import Bid from "./components/bid/bid"
import Collection from "./components/collection/collection"
import Profile from "./components/profile/profile"
import Settings from "./components/settings/settings"

import React from 'react'

function App() {

  const [selectedComponent, setSelectedComponent] = React.useState('Dashboard')

  return (
    <div className="App">
      <Sidebar
        selectedComponent={selectedComponent}
        changeComponent={setSelectedComponent}
      />
      <div className="container">
        <Header />
        {selectedComponent === 'Dashboard' && <Dashboard />}
        {selectedComponent === 'Bid' && <Bid />}
        {selectedComponent === 'Collection' && <Collection />}
        {selectedComponent === 'Profile' && <Profile />}
        {selectedComponent === 'Settings' && <Settings />}
      </div>
    </div>
  );
}

export default App;
