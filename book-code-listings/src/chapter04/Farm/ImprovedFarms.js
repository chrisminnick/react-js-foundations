import {useState} from 'react';
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
    <pre>
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
    </pre>
    </>
  )
}