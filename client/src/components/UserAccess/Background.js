import React from 'react';

// import Paper from 'material-ui/Paper';

// import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';

// import Image from '../../images/bg-img.png'; // Import using relative path
// client/images/bg-img.png


const styles = {
    paperContainer: {
        backgroundImage: `url(../images/bg-img.png)`
    }
};

export default class Background extends React.Component{
    render(){
        return(
            <div style={styles.paperContainer}>
                Some text to fill the Paper Component
            </div>
        )
    }
}
