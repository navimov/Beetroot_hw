import "./table.css";

function Table() {
  return (
    <>
      <div className="table-container">
        <div className="city" id="lisbon">
          <div className="item-content">
            <h3 className="city-name">Lisbon</h3>
            <div className="item-content__temp">
              <h3>21&deg;C</h3>
              <img src="/src/assets/sun.png" alt="sun" />
            </div>
          </div>
        </div>
        <div className="city" id="paris">
          <div className="item-content">
            <h3 className="city-name">Paris</h3>
            <div className="item-content__temp">
              <h3>11&deg;C</h3>
              <img src="/src/assets/small-rain-cloud.png" alt="rain cloud" />
            </div>
          </div>
        </div>
        <div className="city" id="belgrade">
        <div className="item-content">
            <h3 className="city-name">Belgrade</h3>
            <div className="item-content__temp">
              <h3>15&deg;C</h3>
              <img src="/src/assets/cloud-under-sun.png" alt="small cloud" />
            </div>
          </div>
        </div>
        <div className="city" id="venice">
        <div className="item-content">
            <h3 className="city-name">Venice</h3>
            <div className="item-content__temp">
              <h3>21&deg;C</h3>
              <img src="/src/assets/cloud-above-sun.png" alt="small cloud" />
            </div>
          </div>
        </div>
        <div className="city" id="tel-avive">
        <div className="item-content">
            <h3 className="city-name">Tel-avive</h3>
            <div className="item-content__temp">
              <h3>32&deg;C</h3>
              <img src="/src/assets/hot-sun.png" alt="hot sun" />
            </div>
          </div>
        </div>
        <div className="city" id="cair">
        <div className="item-content">
            <h3 className="city-name">Cair</h3>
            <div className="item-content__temp">
              <h3>21&deg;C</h3>
              <img src="/src/assets/sun.png" alt="sunny" />
            </div>
          </div>
        </div>
        <div className="city" id="new-york">
        <div className="item-content">
            <h3 className="city-name">New-York</h3>
            <div className="item-content__temp">
              <h3>17&deg;C</h3>
              <img src="/src/assets/thunderstorm-cloud-sun.png" alt="thunderstorm" />
            </div>
          </div>
        </div>
        <div className="city" id="new-delhi">
        <div className="item-content">
            <h3 className="city-name">New-Delhi</h3>
            <div className="item-content__temp">
              <h3>17&deg;C</h3>
              <img src="/src/assets/rain-cloud.png" alt="rainy" />
            </div>
          </div>
        </div>
        <div className="city" id="san-francisco">
        <div className="item-content">
            <h3 className="city-name">San-Francisco</h3>
            <div className="item-content__temp">
              <h3>15&deg;C</h3>
              <img src="/src/assets/sunny.png" alt="sunny" />
            </div>
          </div>
        </div>
        <div className="city" id="tokyo">
        <div className="item-content">
            <h3 className="city-name">Tokyo</h3>
            <div className="item-content__temp">
              <h3>8&deg;C</h3>
              <img src="/src/assets/moon.png" alt="moon" />
            </div>
          </div>
        </div>
        <div className="city" id="sydney">
        <div className="item-content">
            <h3 className="city-name">Sydney</h3>
            <div className="item-content__temp">
              <h3>8&deg;C</h3>
              <img src="/src/assets/moon.png" alt="moon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
