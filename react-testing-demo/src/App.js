import logo from './logo.svg';
import './App.css';
import StoreList from "./Components/StoreList/StoreList";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <StoreList
        stores={[
          {
            id: 1,
            address: "123 street"
          },
          {
            id: 2,
            address: "136 Crosby"
          },
          {
            id: 3,
            address: "10 Broadway"
          },
        ]}
        sale={true}
        loadData={() => { }}
      />
    </div>
  );
}

export default App;
