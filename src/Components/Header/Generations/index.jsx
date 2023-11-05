import Gen1 from './gen1.jsx'
import Gen2 from './gen2.jsx'
import Gen3 from './gen3.jsx'
import Gen4 from './gen4.jsx'

export default function Generations() {
    return (
      <>
        <div>
          <li>Generations</li>
          <Gen1 
          Gen="Generation 1"/>
          <Gen2 
          Gen="Generation 2"/>
          <Gen3 
          Gen="Generation 3"/>  
          <Gen4 
          Gen="Generation 4"/>         
        </div>
      </>
    )
  }
  