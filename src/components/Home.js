
import React    from 'react';
import Logo 	from 'components/Logo.js'
import SoundBarsContainer from 'components/SoundBarsContainer.js'
import Slider from 'components/Slider.js'

class Home extends React.Component {

    render() {
        return (
            <div>
                <Logo/>
                <SoundBarsContainer/>
                <Slider/>
            </div>
        );
    }
}

export default Home;