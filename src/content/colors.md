The UItools colour palette aims at providing an organised approach to apply colour to the UI of your apps.

### Colour usage

### Accesibility

Follow the AA standards. Make sure the background and text used have a minimal contrast ratio.

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 40px;
  margin-bottom: 40px;
}
.box {
  color: white;
  height: 220px;
  position: relative;
  margin: 20px;
}
.box > div {
    border-radius: 25px;
}
.box.invert {
  color: #3A3A3A;
}
.main {
  border-radius: 5px;
  height: 120px;
  width: 100%;
  position: absolute;
  padding: 22px;
  z-index: 2;
}

.main-heading {
  font-size: 20px;
  font-family: 'Open Sans';
  margin-bottom: 25px;
}
.light {
  border-radius: 5px;
  height: 60px;
  position: absolute;
  z-index: 1;
  top: 110px;
  width: 100%;
  padding: 22px;
}
.light p {
    transform: translateY(28px);
}
.lighter {
  top: 160px;
  z-index: 0;
}

</style>

```jsx noeditor
<div className="grid">
    <div className="box">
        <div className="main" style={{ backgroundColor: "#9C2AA0" }}>
            <div className="main-heading">Red Violet</div>
            <span>#9C2AA0</span>
        </div>
        <div className="light" style={{ backgroundColor: "#CD94CF" }}>
            <p>#CD94CF</p>
        </div>
        <div className="light lighter" style={{ backgroundColor: "#E6CAE7" }}>
            <p>#E6CAE7F</p>
        </div>
    </div>
    <div className="box">
        <div className="main" style={{ backgroundColor: "#5E2750" }}>
            <div className="main-heading">Aubergine</div>
            <span>#5E2750</span>
        </div>
        <div className="light" style={{ backgroundColor: "#AE93A7" }}>
            <p>#AE93A7</p>
        </div>
        <div className="light lighter" style={{ backgroundColor: "#D7C9D3" }}>
            <p>#D7C9D3</p>
        </div>
    </div>
    <div className="box">
        <div className="main" style={{ backgroundColor: "#00BCD4" }}>
            <div className="main-heading"> Blue</div>
            <span>#00BCD4</span>
        </div>
        <div className="light" style={{ backgroundColor: "#7FD7E4" }}>
            <p>#7FD7E4</p>
        </div>
        <div className="light lighter" style={{ backgroundColor: "#BFEBF2" }}>
            <p>#BFEBF2</p>
        </div>
    </div>
    <div className="box">
        <div className="main" style={{ backgroundColor: "#007C92" }}>
            <div className="main-heading">Turquoise</div>
            <span>#007C92</span>
        </div>
        <div className="light" style={{ backgroundColor: "#7FBDC8" }}>
            <p>#7FBDC8</p>
        </div>
        <div className="light lighter" style={{ backgroundColor: "#BFDEE4" }}>
            <p>#BFDEE4</p>
        </div>
    </div>
    <div className="box">
        <div className="main" style={{ backgroundColor: "#13CE66" }}>
            <div className="main-heading">Green</div>
            <span>#13CE66</span>
        </div>
        <div className="light" style={{ backgroundColor: "#46EE90" }}>
            <p>#46EE90</p>
        </div>
        <div className="light lighter" style={{ backgroundColor: "#AEF7CE" }}>
            <p>#AEF7CE</p>
        </div>
    </div>
    <div className="box">
        <div className="main" style={{ backgroundColor: "#7ED321" }}>
            <div className="main-heading">Lime</div>
            <span>#7ED321</span>
        </div>
        <div className="light" style={{ backgroundColor: "#AAE867" }}>
            <p>#AAE867</p>
        </div>
        <div className="light lighter" style={{ backgroundColor: "#E6F8D2" }}>
            <p>#E6F8D2</p>
        </div>
    </div>
    <div className="box">
        <div className="main" style={{ backgroundColor: "#FECB00" }}>
            <div className="main-heading">Yellow </div>
            <span>#FECB00</span>
        </div>
        <div className="light" style={{ backgroundColor: "#FEE57F" }}>
            <p>#FEE57F</p>
        </div>
        <div className="light lighter" style={{ backgroundColor: "#FFF2BF" }}>
            <p>#FFF2BF</p>
        </div>
    </div>
    <div className="box">
        <div className="main" style={{ backgroundColor: "#F8E71C" }}>
            <div className="main-heading">Lemon </div>
            <span>#F8E71C</span>
        </div>
        <div className="light" style={{ backgroundColor: "#FBF27F" }}>
            <p>#FBF27F</p>
        </div>
        <div className="light lighter" style={{ backgroundColor: "#FDF8BD" }}>
            <p>#FDF8BD</p>
        </div>
    </div>
    <div className="box">
        <div className="main" style={{ backgroundColor: "#FF5722" }}>
            <div className="main-heading">Orange</div>
            <span>#FF5722</span>
        </div>
        <div className="light" style={{ backgroundColor: "#FFA88C" }}>
            <p>#FFA88C</p>
        </div>
        <div className="light lighter" style={{ backgroundColor: "#FFDBCF" }}>
            <p>#FFDBCF</p>
        </div>
    </div>
    <div className="box">
        <div className="main" style={{ backgroundColor: "#F50056" }}>
            <div className="main-heading">Red</div>
            <span>#F50056</span>
        </div>
        <div className="light" style={{ backgroundColor: "#FF518E" }}>
            <p>#FF518E</p>
        </div>
        <div className="light lighter" style={{ backgroundColor: "#FFCDDE" }}>
            <p>#FFCDDE</p>
        </div>
    </div>
</div>
```
