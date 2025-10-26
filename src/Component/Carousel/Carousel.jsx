import { Carousel } from "react-responsive-carousel"
import { img } from "./img/data.jsx"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import classes from "./carousel.module.css"

const CarouselEffect = () => {
  return (
    <div className={classes.carousel_wrapper}>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false}>
        {img.map((imageItemLink, index) => {
          return <img key={index} src={imageItemLink || "/placeholder.svg"} alt="" />
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  )
}

export default CarouselEffect
