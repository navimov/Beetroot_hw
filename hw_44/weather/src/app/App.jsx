import "./App.css";
import logo from "../assets/main-icon.png";
import Table from "../table/table.jsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="content-container">
          <div className="header-container">
            <h2 className="header-text">CSS Weather Forecast</h2>
            <img src={logo} alt="main icon" />
          </div>
          <Table />
          <div className="footer-container">
            <h3 className="footer-text">
              Have a nice day and don&#39;t forget umbrella if you are in New
              Delhi now!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
