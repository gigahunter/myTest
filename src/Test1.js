import React from "react";

function funcA(v) {
  if (!v) return "";

  let ret = "";
  for (let i = v.length - 1; i >= 0; i--) ret += v[i];

  return ret;
}

function funcB(v) {
  const ary = v.split(" ");
  return ary.map((a) => funcA(a)).join(" ");
}

class Test1 extends React.PureComponent {
  state = {
    v1: "junyiacademy",
    v2: "flipped class room is important",
  };

  render() {
    return (
      <div>
        A:
        <input
          style={{ width: "90%" }}
          type="text"
          value={this.state.v1}
          onChange={(e) => this.setState({ v1: e.target.value })}
        />
        <br />
        {funcA(this.state.v1)}
        <br />
        B:
        <input
          style={{ width: "90%" }}
          type="text"
          value={this.state.v2}
          onChange={(e) => this.setState({ v2: e.target.value })}
        />
        <br />
        {funcB(this.state.v2)}
      </div>
    );
  }
}

export default Test1;
