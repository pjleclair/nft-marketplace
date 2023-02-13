import "./App.css"
import Sidebar from "./components/sidebar/sidebar"
import Header from "./components/header/header"
import Content from "./components/content/content"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
