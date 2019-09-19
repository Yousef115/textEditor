import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    text: "",
    color: null,
    bold: false,
    italics: false,
    underlined: false
  };

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];
    let bold = this.state.bold,
      italics = this.state.italics,
      underlined = this.state.underlined;

    let stylingBoxes = styleNames.map(style => {
      let btncolor;
      switch (style) {
        case "bold":
          btncolor = bold ? "true" : "false";
          break;
        case "italic":
          btncolor = italics ? "true" : "false";
          break;
        case "underline":
          btncolor = underlined ? "true" : "false";
          break;
        default:
          break;
      }
      return (
        <button
          className={btncolor}
          id={style}
          style={styles[style]}
          key={style}
          onClick={() => {
            changeFont({ style });
          }}
        >
          {style}
        </button>
      );
    });
    let changeColor = color => this.setState({ color: color.color });

    let changeFont = style => {
      if (style.style === "bold") this.setState({ bold: !bold });
      if (style.style === "italic") this.setState({ italics: !italics });
      if (style.style === "underline")
        this.setState({ underlined: !underlined });
    };

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => {
            changeColor({ color });
          }}
        />
      );
    });

    let isBold = bold ? "bold" : "",
      isItalic = italics ? "italic" : "",
      isUnderlined = underlined ? "underline" : "",
      color = this.state.color;

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            color: color,
            fontWeight: isBold,
            fontStyle: isItalic,
            textDecoration: isUnderlined
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
