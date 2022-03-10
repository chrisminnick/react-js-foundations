import { useState } from 'react';
import ImprovedFarm from './ImprovedFarm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function ImprovedFarms() {
  const initialFarms = [
    {
      farmer: 'Old McDonald',
      animals: ['pigs', 'cows', 'chickens'],
    },
  ];
  const [farms] = useState(initialFarms);
  return (
    <>
      {farms
        ? farms.map((farm, index) => (
            <ImprovedFarm
              key={index}
              farmer={farm.farmer}
              animals={farm.animals}
            />
          ))
        : null}
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState} from 'react';
import ImprovedFarm from './ImprovedFarm';

export default function ImprovedFarms(){
  const initialFarms = [{
      farmer:"Old McDonald",
      animals:['pigs','cows','chickens']}];  
  const [farms] = useState(initialFarms);
  return(
    <>
      {
      farms?
        farms.map((farm,index)=><ImprovedFarm key={index} farmer={farm.farmer} animals={farm.animals} />):
        null
      }
    </>
  )
}`}
      </SyntaxHighlighter>
    </>
  );
}
