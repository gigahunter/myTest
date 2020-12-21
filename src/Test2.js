import React from "react";

function func(v) {
  let ret = 0;

  let str = "";
  for (let i = 1; i <= v; i++) {
    const m3 = i % 3;
    const m5 = i % 5;

    if (m3 === 0 && m5 !== 0) continue;
    if (m5 === 0 && m3 !== 0) continue;

    str += " " + i;
    ret++;
  }

  return (
    <>
      {str}
      <br />
      Output: {ret}
    </>
  );
}

class Test2 extends React.PureComponent {
  state = {
    v: 15,
  };

  render() {
    return (
      <div>
        Input:<input type="number" value={this.state.v} onChange={(e) => this.setState({ v: e.target.value })}></input>
        <br />
        {func(this.state.v)}
      </div>
    );
  }
}

export default Test2;
