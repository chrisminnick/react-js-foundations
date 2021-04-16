import React, {createContext, useState} from 'react';
export const UnitsContext = createContext();

export const UnitsProvider = ({ children }) => {
    const [lengthUnit, setLengthUnit] = useState("cm");
    const [tempUnit, setTempUnit] = useState("c");
    return (
        <UnitsContext.Provider value={{ lengthUnit, setLengthUnit, tempUnit, setTempUnit }}>
            {children}
        </UnitsContext.Provider>
    );
};

export const withUnits = (Child) => (props) => (
    <UnitsContext.Consumer>
        {(context) => <Child {...props} {...context} />}
    </UnitsContext.Consumer>
)