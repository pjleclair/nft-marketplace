import "./App.css"
import Sidebar from "./components/sidebar/sidebar"
import Header from "./components/header/header"
import Content from "./components/content/content"
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
        {selectedComponent === 'Dashboard' && <Content />}
      </div>
    </div>
  );
}

export default App;
