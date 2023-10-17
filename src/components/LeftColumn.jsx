import AreaChartComponent from "./AreaChartComponent";
import CardItem from "./CardItem";
import TableComponent from "./TableComponent";

const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2 text-gray-300">
      <div className="w-full flex flex-col gap-2 lg:flex-row">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <div className="flex-auto w-full">
        <AreaChartComponent />
        <TableComponent />
      </div>
    </div>
  );
};

export default LeftColumn;
