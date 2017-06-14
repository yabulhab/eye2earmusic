
import React    from 'react';
import Logo 	from 'components/Logo.js'
import SoundBarsContainer from 'components/SoundBarsContainer.js'
import Slider from 'components/Slider.js'
import Footer       from 'components/Footer.js';
import ContactInfo	from 'components/ContactInfo.js'



class Home extends React.Component {

    render() {
        return (
            <div className="allContentContainer">
            	<div className="logoAndSoundBarsContainer">
	                <Logo/>
	                <SoundBarsContainer/>
                </div>
                <Slider/>
                <ContactInfo/>
                <Footer/>
            </div>
        );
    }
}

export default Home;