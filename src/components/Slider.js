import React  from 'react';
import SimpleSlider from 'react-slick';

import twelve_years from 'sized_imgs/12years.jpg'
import juliet from 'sized_imgs/juliet.jpg'
import mercy from 'sized_imgs/mercy.jpg'
import red from 'sized_imgs/red.jpg'
import runaways from 'sized_imgs/runaways.jpg'
import stepup from 'sized_imgs/stepup.jpg'
import treeoflife from 'sized_imgs/treeoflife.jpg'
import twilight1 from 'sized_imgs/twilight1.jpg'
import twilight2 from 'sized_imgs/twilight2.jpg'
import twilight3 from 'sized_imgs/twilight3.jpg'
import twilight4 from 'sized_imgs/twilight4.jpg'
import twilight5 from 'sized_imgs/twilight5.jpg'
import twilight6 from 'sized_imgs/twilight6.jpg'
import waitingsuperman from 'sized_imgs/waitingsuperman.jpg'
import wallflower from 'sized_imgs/wallflower.jpg'


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
        <div><img src={twelve_years}/></div>
        <div><img src={juliet}/></div>
        <div><img src={mercy}/></div>
        <div><img src={red}/></div>
        <div><img src={runaways}/></div>
        <div><img src={stepup}/></div>
        <div><img src={treeoflife}/></div>
        <div><img src={twilight1}/></div>
        <div><img src={twilight2}/></div>
        <div><img src={twilight3}/></div>
        <div><img src={twilight4}/></div>
        <div><img src={twilight5}/></div>
        <div><img src={twilight6}/></div>
        <div><img src={waitingsuperman}/></div>
        <div><img src={wallflower}/></div>

       
      </SimpleSlider>
    );
  }
}

export default Slider;