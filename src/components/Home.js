
import React    from 'react';
import Logo 	from 'components/Logo.js'
import SoundBarsContainer from 'components/SoundBarsContainer.js'

class Home extends React.Component {

    render() {
        return (
            <div>
                <Logo/>
                <SoundBarsContainer/>
            </div>
        );
    }
}

export default Home;