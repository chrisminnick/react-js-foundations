import Chart from "./Chart";
import SideBarHelp from "./SideBarHelp";

function SalesChart(props) {
  return (
    <>
      <Chart type="sales" />
      <SideBarHelp helpText="This chart shows your sales over time." />
    </>
  );
}

export default SalesChart;
