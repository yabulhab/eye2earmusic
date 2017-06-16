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
        <div><img src="src/imgs/britney.png"/></div>
        <div><img src="src/imgs/bruce.png"/></div>
        <div><img src="src/imgs/cherry.png"/></div>
        <div><img src="src/imgs/idol.png"/></div>
        <div><img src="src/imgs/juliet.png"/></div>
        <div><img src="src/imgs/mercy.png"/></div>
        <div><img src="src/imgs/perks.png"/></div>
        <div><img src="src/imgs/seeme.png"/></div>      
        <div><img src="src/imgs/step.png"/></div>      
        <div><img src="src/imgs/superman.png"/></div>
        <div><img src="src/imgs/twilight.png"/></div>
        <div><img src="src/imgs/britney.png"/></div>
        <div><img src="src/imgs/bruce.png"/></div>
        <div><img src="src/imgs/cherry.png"/></div>
        <div><img src="src/imgs/idol.png"/></div>
        <div><img src="src/imgs/juliet.png"/></div>
        <div><img src="src/imgs/mercy.png"/></div>
        <div><img src="src/imgs/perks.png"/></div>
        <div><img src="src/imgs/seeme.png"/></div>      
        <div><img src="src/imgs/step.png"/></div>      
        <div><img src="src/imgs/superman.png"/></div>
        <div><img src="src/imgs/twilight.png"/></div>
       
      </SimpleSlider>
    );
  }
}

export default Slider;