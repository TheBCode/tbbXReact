import anime from "animejs";

const WaterDropGrid = () => {
  return (
      <div className="relative grid h-screen place-content-center">
          <DropGrid />
      </div>
  );
}

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid = () => {
    return <div></div>;
}

export default WaterDropGrid;