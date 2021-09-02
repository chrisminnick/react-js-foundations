import Farm from './Farm';

export default function Farms(){
  return(
    <>
      <Farm 
        farmer="Old McDonald"
        animals={['pigs','cows','chickens']} />
      <Farm
        farmer="Mr. Jones"
        animals={['pigs','horses','donkey','goat']} /> 
    <pre>
{`import Farm from './Farm';

export default function Farms(){
  return(
    <>
      <Farm 
        farmer="Old McDonald"
        animals={['pigs','cows','chickens']} />
      <Farm
        farmer="Mr. Jones"
        animals={['pigs','horses','donkey','goat']} />  
    </>
  )
}`}
    </pre>
    </>
  )
}