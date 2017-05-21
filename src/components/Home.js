
import React    from 'react';
import logo 	from 'imgs/logo.png'

class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <img src={logo}/>
            </div>
        );
    }
}

export default Home;