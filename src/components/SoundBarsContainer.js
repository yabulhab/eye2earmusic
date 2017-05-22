import React    from 'react';
import SoundBars from 'components/SoundBars.js'

class SoundBarsContainer extends React.Component {

    render() { 
        //decides how many colums there will be
        //get the window width
        //use window width to figure out how many colums there should be
        //pass that number into SoundBars
        console.log(window.innerWidth);
        let soundBars = [];
        for (let i=0; i <10; i++) {
            soundBars.push(<SoundBars/>)
        }
        return (
            <div>
                {soundBars}
            </div>
        );
    }
}

export default SoundBarsContainer;