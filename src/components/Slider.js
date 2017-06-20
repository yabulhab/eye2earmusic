import React  from 'react';
import SimpleSlider from 'react-slick';


class Slider extends React.Component {
  render() {

    var sliderSettings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 8,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        accessibility: true,
        responsive: [
            { breakpoint:479, settings:{slidesToShow:3} },
            { breakpoint:585, settings:{slidesToShow:4} }, 
            { breakpoint:710, settings:{slidesToShow:5} }, 
            { breakpoint:842, settings:{slidesToShow:6} }, 
            { breakpoint:1024, settings:{ slidesToShow:7} }, 
            { breakpoint:1440, settings:{ slidesToShow:8} },
            { breakpoint:2560, settings:{ slidesToShow:12} },                                   
            { breakpoint:100000, settings:'unslick'}
        ]
    }


    return (
      <SimpleSlider {...sliderSettings}>
        <div><img src="/src/imgs/sized/12years.jpg"/></div>
        <div><img src="eye2earmusic/src/imgs/sized/juliet.jpg"/></div>
        <div><img src="src/imgs/sized/mercy.jpg"/></div>
        <div><img src="src/imgs/sized/red.jpg"/></div>
        <div><img src="src/imgs/sized/runaways.jpg"/></div>
        <div><img src="src/imgs/sized/stepup.jpg"/></div>
        <div><img src="src/imgs/sized/treeoflife.jpg"/></div>
        <div><img src="src/imgs/sized/twilight1.jpg"/></div>      
        <div><img src="src/imgs/sized/twilight2.jpg"/></div>      
        <div><img src="src/imgs/sized/twilight3.jpg"/></div>
        <div><img src="src/imgs/sized/twilight4.jpg"/></div>
        <div><img src="src/imgs/sized/twilight5.jpg"/></div>
        <div><img src="src/imgs/sized/twilight6.jpg"/></div>
        <div><img src="src/imgs/sized/waitingsuperman.jpg"/></div>
        <div><img src="src/imgs/sized/wallflower.jpg"/></div>

       
      </SimpleSlider>
    );
  }
}

export default Slider;