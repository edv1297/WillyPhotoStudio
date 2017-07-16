import React from 'react';
import Slider from 'react-slick';
import Image from 'react-image-resizer';

export class Gallery extends React.Component{

    resize(){
        this.setState({});
    }
    componentDidMount(){
            window.addEventListener("resize", this.resize.bind(this));
    }
    componentWillUnmount(){
            window.removeEventListener("resize", this.resize.bind(this));
    }

    render (){
     var gallery;
     var array = ["/assets/pics/10.jpg", "/assets/pics/16.jpg", "/assets/pics/13.jpg"];

     if(!isMobile()){
       gallery = (
           <div>
           <MainSlider imageArray = {array} newHeight = {window.innerHeight*.8}  newWidth = {window.innerWidth*.8} />
           <SmallSlider imageArray  = {array} smallHeight = {window.innerHeight*.10} newWidth = {window.innerWidth*.10}/>
           </div>
 )
}else {

    gallery = (
     <div>
     <MobileSlider imageArray = {array} mobileHeight = {window.innerHeight*.75} mobileWidth = {window.innerWidth*.78}/>
     </div>
   )
 }

 return(
   <div>
   <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
   <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
   <link rel="stylesheet" href="css/gallery.css"></link>
   <div className = "company-title">Wedding Gallery</div>
   {(isMobile()) ?
       <div width = {'100%'} height = {'80%'}>
       {gallery}
       </div>
        : <div className = "gallery-container"> {gallery} </div>}

</div>
 )

 }
}

export const MainSlider = (props) => {

   var settings = {

     arrows:true,
     infinite: true,
     speed: 800,
     slidesToShow: 1,
     slidesToScroll: 1,
     centerMode : true,
     lazyLoad:true,
     nextArrow: <NextArrow/>,
     prevArrow: <PrevArrow/>,
     className: 'large-container'

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

 export const SmallSlider = (props) => {

     var smallSettings = {
         dots: false,
         arrows:false,
         infinite: true,
         speed: 1500,
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay : true,
         className : "small-container",
         focusOnSelect: true,
     }

      var smallImages = [];

      for (var i = 0; i< props.imageArray.length; ++i){
          smallImages.push(<div key = {i}> <Image src = {props.imageArray[i]} height = {props.smallHeight} width = {props.smallWidth} left = {props.left}/></div>)
      }


      return (

          <Slider {...smallSettings}>
          {smallImages}
          </Slider>
      );
 }

 export const MobileSlider = (props) =>{

     var mobileSettings = {
         dots:true,
         arrows: false,
         infinite:true,
         speed:1000,
         swipeToSlide:true,
         className: "mobile-container",




     }
     var mobileImages = [];

     for (var i = 0; i< props.imageArray.length; i++){
         mobileImages.push(<div key = {i}> <Image src = {props.imageArray[i]} height = {props.mobileHeight} width = {props.mobileWidth} left = {props.left}/></div>)
     }

     return (

         <Slider {...mobileSettings}>
         {mobileImages}
         </Slider>
     );
 }

 function NextArrow(props) {
   const {className, style, onClick} = props
   return (
     <button
       className={className}
       style={{ display: 'block', background: 'green', height: '1vw', width:'1vw', minWidth: "25px", minHeight: "25px", borderRadius :"10px", opacity:'.5'}}
       onClick={onClick}
     ></button>
   );
 }

 function PrevArrow(props) {
   const {className, style, onClick} = props
   return (
     <button
       className={className}
       style={{display: 'block', background: 'green', height: '1vw', width:'1vw', minWidth: "25px", minHeight: "25px", borderRadius :"10px", opacity :'.5'}}
       onClick={onClick}
     ></button>
   );
 }
