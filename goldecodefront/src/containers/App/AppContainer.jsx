import React from 'react'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'


class App extends React.Component{

    render(){
        const {classes,...rest} = this.props;
        return(
            <div>
                Hello App
            </div>
        )
    }
}

export default App;