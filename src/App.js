import React, { useState } from "react";

import "./App.scss";

import Img1 from "./images/1.png";
import Img2 from "./images/2.png";
import Img3 from "./images/3.png";
import Img4 from "./images/4.png";

function App() {
  const initalPrice = 1060;
  const [price, setPrice] = useState(initalPrice);
  const [selection, setSelection] = useState({
    motherboard: "Motherboard 1",
    cpu: "",
    ram: "",
    ssd: "",
    fan: "",
    graphics: "",
  });
  const [priceAnimating, setPriceAnimating] = useState(false);

  const setValues = (price, itemType, item) => {
    setPriceFnc(price);
    setSelectionFnc(itemType, item);
  };

  const setPriceFnc = (price) => {
    setPrice(initalPrice + price);
    animatePrice();
  };

  const setSelectionFnc = (itemType, item) => {
    setSelection((prevState) => ({
      ...prevState,
      [itemType]: item,
    }));

    const testItems = document.querySelectorAll("[data-case-active]");
    let testItem = testItems[Math.floor(Math.random() * testItems.length)];

    testItems.forEach((t) => {
      t.setAttribute("data-case-active", "false");
    });

    testItem.setAttribute("data-case-active", "true");
  };

  const animatePrice = () => {
    setPriceAnimating(true);
    setTimeout(() => {
      setPriceAnimating(false);
    }, 500);
  };

  return (
    <div className="app">
      <div className="visual">
        <h2 className="side-text side-text--left">Elite</h2>

        <img src={Img1} alt="Case 1" data-case-active={true}></img>
        <img src={Img2} alt="Case 2" data-case-active={false}></img>
        <img src={Img3} alt="Case 3" data-case-active={false}></img>
        <img src={Img4} alt="Case 4" data-case-active={false}></img>

        <svg
          className="blue-bg"
          xmlns="http://www.w3.org/2000/svg"
          width="2015.971"
          height="1726.698"
          viewBox="0 0 2015.971 1726.698"
        >
          <defs>
            <linearGradient
              id="blue-linear-gradient"
              x1="0.526"
              y1="0.045"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#00fff5" stop-opacity="0" />
              <stop offset="1" stop-color="#00fff5" />
            </linearGradient>
          </defs>
          <rect
            id="blue"
            width="1884"
            height="812"
            transform="translate(454.065) rotate(34)"
            opacity="0.597"
            fill="url(#blue-linear-gradient)"
          />
        </svg>

        <svg
          id="Bottom_gradient"
          data-name="Bottom gradient"
          xmlns="http://www.w3.org/2000/svg"
          width="1964"
          height="485"
          viewBox="0 0 1964 485"
          className="bottom-gradient"
        >
          <defs>
            <linearGradient
              id="bottom-gradient"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-opacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
          <rect
            id="Bottom_gradient-2"
            data-name="Bottom gradient"
            width="1964"
            height="485"
            fill="url(#bottom-gradient)"
          />
        </svg>
      </div>
      <div className="customiser">
        <div className="customise-section">
          <div className="customise-heading">Motherboard</div>
          <div className="customise-content">
            <div className="customise-item">
              <input
                type="radio"
                value="motherboard1"
                id="motherboard1"
                name="motherboard"
                onChange={() => setValues(60, "motherboard", "Motherboard 1")}
                checked
              />
              <label htmlFor="motherboard1">
                <img
                  src="https://www.scan.co.uk/images/infopages/z490_motherboard/asus/rogggaming/topimg.png"
                  alt="motherboard 1"
                ></img>
                <div className="customise-item__name">Motherboard 1</div>
                <span className="customise-item__price">£60</span>
              </label>
            </div>
          </div>
        </div>

        <div className="customise-section">
          <div className="customise-heading">CPU</div>
          <div className="customise-content">
            <div className="customise-item">
              <input
                type="radio"
                value="cpu1"
                id="cpu1"
                name="cpu"
                onChange={() => setValues(100, "cpu", "CPU 1")}
              />
              <label htmlFor="cpu1">
                <img
                  src="https://www.pinclipart.com/picdir/middle/346-3466329_cpu-clipart-transparent-background-intel-core-i7-png.png"
                  alt="CPU 1"
                ></img>
                <div className="customise-item__name">CPU1</div>
                <span className="customise-item__price">£100</span>
              </label>
            </div>

            <div className="customise-item">
              <input
                type="radio"
                value="cpu2"
                id="cpu2"
                name="cpu"
                onChange={() => setValues(200, "cpu", "CPU 2")}
              />
              <label htmlFor="cpu2">
                <img
                  src="https://e7.pngegg.com/pngimages/391/360/png-clipart-amd-ryzen-5-1600x-socket-am4-central-processing-unit-processor-ryzen-computer-electronic-device.png"
                  alt="CPU 2"
                ></img>
                <div className="customise-item__name">CPU2</div>
                <span className="customise-item__price">£200</span>
              </label>
            </div>
          </div>
        </div>

        <div className="customise-section">
          <div className="customise-heading">RAM</div>
          <div className="customise-content">
            <div className="customise-item">
              <input
                type="radio"
                value="ram1"
                id="ram1"
                name="ram"
                onChange={() => setValues(200, "ram", "SHIELD RGB DDR4")}
              />
              <label htmlFor="ram1">
                <img
                  src="https://www.zadak.biz/storage/products/19/tKDhHMymPGkhzMdrgQI6cebmUxgkBzLkLut9FLlT.png"
                  alt="SHIELD RGB DDR4"
                ></img>
                <div className="customise-item__name">SHIELD RGB DDR4</div>
                <span className="customise-item__price">£200</span>
              </label>
            </div>

            <div className="customise-item">
              <input
                type="radio"
                value="ram2"
                id="ram2"
                name="ram"
                onChange={() =>
                  setValues(300, "ram", "SHIELD DC RGB DDR4 32GB 3600MHZ SING…")
                }
              />
              <label htmlFor="ram2">
                <img
                  src="https://www.zadak.biz/storage/products/17/USEPC35W5Hh9ec2TdeKbmfZkveYDBRejPNDgWX8o.png"
                  alt="SHIELD DC RGB DDR4 32GB 3600MHZ SING…"
                ></img>
                <div className="customise-item__name">
                  SHIELD DC RGB DDR4 32GB 3600MHZ SING…
                </div>
                <span className="customise-item__price">£300</span>
              </label>
            </div>

            <div className="customise-item">
              <input
                type="radio"
                value="ram3"
                id="ram3"
                name="ram"
                onChange={() => setValues(220, "ram", "SPARK RGB DDR4")}
              />
              <label htmlFor="ram3">
                <img
                  src="https://www.zadak.biz/storage/products/49/XTJtMPNsTeTbUvKK8azSBoN0CZo7NcQFryINnv6U.png"
                  alt="SPARK RGB DDR4"
                ></img>
                <div className="customise-item__name">SPARK RGB DDR4</div>
                <span className="customise-item__price">£220</span>
              </label>
            </div>

            <div className="customise-item">
              <input
                type="radio"
                value="ram4"
                id="ram4"
                name="ram"
                onChange={() => setValues(150, "ram", "MOAB RGB DDR4")}
              />
              <label htmlFor="ram4">
                <img
                  src="https://www.zadak.biz/storage/products/18/FwtlYhXyA2QDwCwdWsVGX9yShzInEv32WxQnkHcq.png"
                  alt="MOAB RGB DDR4"
                ></img>
                <div className="customise-item__name">MOAB RGB DDR4</div>
                <span className="customise-item__price">£150</span>
              </label>
            </div>

            <div className="customise-item">
              <input
                type="radio"
                value="ram5"
                id="ram5"
                name="ram"
                onChange={() => setValues(176, "ram", "TWIST DDR4")}
              />
              <label htmlFor="ram5">
                <img
                  src="https://www.zadak.biz/storage/products/62/FhpXzHijjaU9xg5VubKVSTTSdi4Yso4C2kEZBefR.png"
                  alt="TWIST DDR4"
                ></img>
                <div className="customise-item__name">TWIST DDR4</div>
                <span className="customise-item__price">£176</span>
              </label>
            </div>
          </div>
        </div>

        <div className="customise-section">
          <div className="customise-heading">SSD</div>
          <div className="customise-content">
            <div className="customise-item">
              <input
                type="radio"
                value="ssd1"
                id="ssd1"
                name="ssd"
                onChange={() =>
                  setValues(50, "ssd", "SPARK PCIe Gen 3x4 M.2 RGB SSD")
                }
              />
              <label htmlFor="ssd1">
                <img
                  src="https://www.zadak.biz/storage/products/65/dEnBUV6tFy4GxQjuTabxJhZYTxlblrTSKQuDtWTY.png"
                  alt="SPARK PCIe Gen 3x4 M.2 RGB SSD"
                ></img>
                <div className="customise-item__name">
                  SPARK PCIe Gen 3x4 M.2 RGB SSD
                </div>
                <span className="customise-item__price">£50</span>
              </label>
            </div>

            <div className="customise-item">
              <input
                type="radio"
                value="ssd2"
                id="ssd2"
                name="ssd"
                onChange={() =>
                  setValues(176, "ssd", "MOAB M.2 RGB HEAT SPREADER")
                }
              />
              <label htmlFor="ssd2">
                <img
                  src="https://www.zadak.biz/storage/products/20/QwETkTHVMHg0GVdt0x4kjtycYbOOsWmfAJhsPs9o.png"
                  alt="MOAB M.2 RGB HEAT SPREADER"
                ></img>
                <div className="customise-item__name">
                  MOAB M.2 RGB HEAT SPREADER
                </div>
                <span className="customise-item__price">£70</span>
              </label>
            </div>
          </div>
        </div>

        <div className="customise-section">
          <div className="customise-heading">Fan</div>
          <div className="customise-content">
            <div className="customise-item">
              <input
                type="radio"
                value="fan1"
                id="fan1"
                name="fan"
                onChange={() => setValues(50, "fan", "SPARK AIO Liquid Cooler")}
              />
              <label htmlFor="fan1">
                <img
                  src="https://www.zadak.biz/storage/products/50/k0LSHqC3loeEODdnh24352a8aEyCMjQXxk7HBJbN.png"
                  alt="SPARK AIO Liquid Cooler"
                ></img>
                <div className="customise-item__name">
                  SPARK AIO Liquid Cooler
                </div>
                <span className="customise-item__price">£80</span>
              </label>
            </div>

            <div className="customise-item">
              <input
                type="radio"
                value="fan2"
                id="fan2"
                name="fan"
                onChange={() =>
                  setValues(50, "fan", "SPARK AIO Lite Liquid Cooler")
                }
              />
              <label htmlFor="fan2">
                <img
                  src="https://www.zadak.biz/storage/products/61/BIiwHLPGx2RDY8VmY1Z1DYd1Bm3bIz0ebAbfYpc1.png"
                  alt="SPARK AIO Lite Liquid Cooler"
                ></img>
                <div className="customise-item__name">
                  SPARK AIO Lite Liquid Cooler
                </div>
                <span className="customise-item__price">£110</span>
              </label>
            </div>
          </div>
        </div>

        <div className="customise-section">
          <div className="customise-heading">Graphics Card</div>
          <div className="customise-content">
            <div className="customise-item">
              <input
                type="radio"
                value="graphics1"
                id="graphics1"
                name="graphics"
                onChange={() => setValues(3000, "graphics", "RTX 3080")}
              />
              <label htmlFor="graphics1">
                <img
                  src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/geforce-rtx-3080-shop-462-l@2x.png"
                  alt="RTX 3080"
                ></img>
                <div className="customise-item__name">RTX 3080</div>
                <span className="customise-item__price">£3000</span>
              </label>
            </div>
          </div>
        </div>

        <div className="customise-section customise-section--buy">
          <div className="customise-heading">Buy your custom PC</div>
          <div className="customise-content">
            <div className="price" data-animating={priceAnimating}>
              <span className="price-heading">Price:</span>&nbsp;£
              <span className="price-value">{price}</span>
            </div>
            <div className="final">
              <span className="final-heading">Case:</span>
              Elite
            </div>
            <div className="final">
              <span className="final-heading">Motherboard:</span>
              {selection.motherboard ? selection.motherboard : "None"}
            </div>
            <div className="final">
              <span className="final-heading">CPU:</span>
              {selection.cpu ? selection.cpu : "None"}
            </div>
            <div className="final">
              <span className="final-heading">RAM:</span>
              {selection.ram ? selection.ram : "None"}
            </div>
            <div className="final">
              <span className="final-heading">SSD:</span>
              {selection.ssd ? selection.ssd : "None"}
            </div>
            <div className="final">
              <span className="final-heading">Fan:</span>
              {selection.fan ? selection.fan : "None"}
            </div>
            <div className="final">
              <span className="final-heading">Graphics Card:</span>
              {selection.graphics ? selection.graphics : "None"}
            </div>
            <button className="buy-btn">Buy now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
