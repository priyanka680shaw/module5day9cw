// import { img2 , img3 , img4 , img5} from '../../assets/banner' 
import img1 from '../../assets/banner/img1.avif'
import img2 from '../../assets/banner/img2.avif'
import img3 from '../../assets/banner/img3.avif'
import img4 from '../../assets/banner/img4.avif'
import img5 from '../../assets/banner/img5.avif'
import img6 from '../../assets/banner//img6.webp'
import img7 from '../../assets/banner/img7.webp'
import img8 from '../../assets/banner/img8.jpg'
import img9 from '../../assets/banner/img9.jpg'
import img10 from '../../assets/banner//img10.jpg'
import img11 from '../../assets/banner/img11.jpg'
import './banner.css'

const imageStyle = {
    width : "300px",
    height : "",
    padding : "5px",
    borderRadius : "1rem"
}
function Banner(){
    return(
        <>
            <div className="BannerContainer">
                
                    <div className="image1">
                        <h1>Royal Multi Gym</h1>
                    </div>
                    
                    <div className="image3" >
                        <figure>
                            <img src={img1} className='hoverProperty' style={imageStyle}></img>
                        </figure>
                    </div>
                    <div className="image4" >
                        <figure>
                            <img src={img11} style={imageStyle}></img>
                        </figure>
                    </div>
                    <div className="image5" >
                        <figure >
                            <img src={img9} style={imageStyle}></img>
                        </figure>
                    </div>
                    <div className="image3" >
                        <figure>
                            <img src={img10} style={imageStyle}></img>
                        </figure>
                    </div>
                    <div className="image4" >
                        <figure>
                            <img src={img4} style={imageStyle}></img>
                        </figure>
                    </div>
                    <div className="image5" >
                        <figure >
                            <img src={img5} style={imageStyle}></img>
                        </figure>
                    </div>
                    <div className="image5" >
                        <figure >
                            <img src={img6} style={imageStyle}></img>
                        </figure>
                    </div>
                    <div className="image3" >
                        <figure>
                            <img src={img7} style={imageStyle}></img>
                        </figure>
                    </div>
                    <div className="image4" >
                        <figure>
                            <img src={img8} style={imageStyle}></img>
                        </figure>
                    </div>
                    <div className="image5" >
                        <figure >
                            <img src={img9} style={imageStyle}></img>
                        </figure>
                    </div>

               
            </div>
        </>
    )
}
export default Banner;