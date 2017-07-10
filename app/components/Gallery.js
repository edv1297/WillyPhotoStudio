import React from 'react';
import Slider from 'react-slick';
import Image from 'react-image-resizer';

export class Gallery extends React.Component{
  render (){
      var gallery;

      if(!isMobile()){
        var array = ["/assets/pics/10.JPG", "/assets/pics/13.JPG", "/assets/pics/16.JPG", "/assets/pics/17.JPG"];

        gallery = (
            <SimpleSlider imageArray = {array} newHeight = {window.innerHeight*1}  newWidth = {window.innerWidth*.94}  />
  )
}else {

    gallery = (
      <div></div>
    )
  }

  return(
    <div>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    <link rel="stylesheet" href="css/gallery.css"></link>

    <div> {gallery} </div>
</div>
  )

  }
}

export const SimpleSlider = (props) => {

    var settings = {
      dots: true,
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className : "large-container",
      centerMode : true,
    }

    var images = [];
    for (var i = 0 ; i< props.imageArray.length; ++i){

    images.push(<div key  = {i}> <Image src = {props.imageArray[i]} height = {props.newHeight} width = {props.newWidth}/></div>)

    }
    return (
          <Slider {...settings}>
            {images}
          </Slider>
    );
  }
