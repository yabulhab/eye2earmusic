import React    from 'react';
import Rectangle	from 'components/Rectangle.js'

class SoundBars extends React.Component {

    render() {
    	let rectangles = [];
        let randomNumPink = Math.floor(Math.random() * 2);
        let randomNumGreen = Math.floor(Math.random() * 8);
    	for (let i=0; i<11; i++) {
            if (i <= 1) {
                if (this.props.section==="outer" && i >= randomNumPink){
                    //sometimes red, sometimes white
                    rectangles.push(<Rectangle color="red"/>)
                } else {
                    rectangles.push(<Rectangle color="white"/>)
                }
            } else if (i <= 6) {
                if (this.props.section==="outer") {
                    rectangles.push(<Rectangle color="green"/>)
                } else if (this.props.section==="notOuter" && i>=randomNumGreen){
                    //sometimes green, sometimes white
                    rectangles.push(<Rectangle color="green"/>)
                } else {
                    rectangles.push(<Rectangle color="white"/>)
                }
            } else {
                rectangles.push(<Rectangle color="blue"/>)
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