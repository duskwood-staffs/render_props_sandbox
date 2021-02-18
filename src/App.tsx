import * as React from "react";

type MousePos = {
  x: number;
  y: number;
};

const Cat = ({ mouse }: { mouse: MousePos }) => {
  return (
    <p
      style={{
        position: "absolute",
        left: mouse.x,
        top: mouse.y
      }}
    >
      m
    </p>
  );
};

class Mouse extends React.Component<
  { render: (x: MousePos) => React.ReactElement },
  MousePos
> {
  state = { x: 0, y: 0 };

  onMouseMove(e: React.MouseEvent) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }

  render() {
    return (
      <div
        style={{
          height: "100vh"
        }}
        onMouseMove={(e) => this.onMouseMove(e)}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default function App() {
  return (
    <>
      <Mouse render={(mouse) => <Cat mouse={{ x: mouse.x, y: mouse.y }} />} />
    </>
  );
}
