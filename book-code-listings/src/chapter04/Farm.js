export default function Farm(props){

    const onTheFarm = props.animals.map ((animal)=>{
      return `On his farm he had some ${animal}. `;
    });
  
    return (
    <div>  
      <p>{props.farmer} had a farm.</p>
      {onTheFarm}
    </div>
    )
  
  }
  