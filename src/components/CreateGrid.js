import React, { Component } from "react";

class CreateGrid extends Component {
  constructor() {
    super();
    this.state = {
      myRows: [],
    };
  }
  rows = 40;
  cols = 40;

  componentDidMount() {
    this.createWorld();
  }

  createWorld = () => {
    const trs = [];
    for (let i = 0; i < this.rows; i++) {
      const tr = document.createElement("tr");

      for (let j = 0; j < this.cols; j++) {
        const td = document.createElement("td");
        tr.appendChild(td);
      }

      trs.push(tr);
    }

    // trs.forEach((t) => console.log(t.innerHTML));

    // trs.forEach((t) => {
    //   return t.innerHTML;
    // });

    this.setState({
      myRows: trs,
    });

    return trs;
  };
  render() {
    console.log("trs: ", this.state.myRows);
    return (
      <table>
        {this.state.myRows.map((element) => {
          //   element.children.forEach((e) => console.log(e));
          console.log(element.children);
          return element.children.forEach((c) => c);
        })}
      </table>
    );
  }
}

export default CreateGrid;
