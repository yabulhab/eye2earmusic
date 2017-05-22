import React    from 'react';
import logo 	from 'imgs/logo.png'

class Logo extends React.Component {

    render() {
        return (
            <div>
                <img id="logo" src={logo}/>
            </div>
        );
    }
}

export default Logo;