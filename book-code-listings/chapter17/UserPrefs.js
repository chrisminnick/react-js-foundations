import { useContext } from "react";
import { UnitsContext } from "./contexts/UnitsContext";

const UserPrefs = (props) => {
  const unitPrefs = useContext(UnitsContext);

  const changeLengthUnit = () => {
    unitPrefs.setLengthUnit(unitPrefs.lengthUnit === "cm" ? "inch" : "cm");
  };

  const changeTempUnit = () => {
    unitPrefs.setTempUnit(unitPrefs.tempUnit === "c" ? "f" : "c");
  };

  return (
    <>
      Your preferred length unit: {unitPrefs.lengthUnit}&nbsp;
      <button onClick={changeLengthUnit}>
        Switch to {unitPrefs.lengthUnit === "cm" ? "inch" : "cm"}
      </button>
      <br />
      Your preferred temperature unit: {unitPrefs.tempUnit}&nbsp;
      <button onClick={changeTempUnit}>
        Switch to {unitPrefs.tempUnit === "c" ? "f" : "c"}
      </button>    
    </>
  );
};

export default UserPrefs;
