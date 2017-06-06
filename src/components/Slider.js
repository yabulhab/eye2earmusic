import React  from 'react';
import SimpleSlider from 'react-slick';


class Slider extends React.Component {
  render() {
    return (
      <SimpleSlider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={6}
        slidesToScroll={1}
        swipeToSlide={true}
        arrows={true}
      >
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