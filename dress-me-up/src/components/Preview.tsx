import '../styles/Preview.css'
import {Base, Necklace} from '../assets'


function Preview() {

  return (
    <>
      <img className="preview" src={Base}/>
      <img className="preview necklace" src={Necklace}/>
    </>
  )
}

export default Preview
