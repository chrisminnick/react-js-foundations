export default function Farm(props){
  
    return (
    <>    
    <div>  
      <p>{props.farmer} had a farm.</p>
      <p>On his farm, he had some {props.animals[0]}.</p>
      <p>On his farm, he had some {props.animals[1]}.</p>
      <p>On his farm, he had some {props.animals[2]}.</p>
    </div>
    <pre>
{`export default function Farm(props){
  
  return (
  <div>  
    <p>{props.farmer} had a farm.</p>
    <p>On his farm, he had some {props.animals[0]}.</p>
    <p>On his farm, he had some {props.animals[1]}.</p>
    <p>On his farm, he had some {props.animals[2]}.</p>
  </div>
  )

}
`}
    </pre>
    </>
    )
  
  }  