import './execrisesCard.css';
import img from '../../assets/img.avif'
function ExereciseCard({image, name, target , 
    bodyPart
    }){
    return(
    <>
    <div>
    <div className="imageContainer flexBox">
            <div className="innerImageContainer flexBox">
                <figure className='figure'>
                    <img src = {image}  className = "image" alt="exiciseImage"/>
                </figure>
                <figcaption> 
                    <h3>{name}</h3>
                    <h5>{target}</h5>
                    <h4>{bodyPart}</h4>
                </figcaption>
            </div>
        </div>
    </div>
       
    </>
    );
}
export default ExereciseCard;