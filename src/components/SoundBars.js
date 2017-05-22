import React    from 'react';
import Rectangle	from 'components/Rectangle.js'

class SoundBars extends React.Component {

    render() {
    	let rectangles = [];
    	for (let i=0; i<11; i++) {
    		if (i >= 7) {
    			rectangles.push(<Rectangle color="blue"/>)
    		} else {
    			rectangles.push(<Rectangle color="green"/>)
    		}
        }
        return (
            <div className="soundBar">
                {rectangles}
            </div>
        );
    }
}

export default SoundBars;