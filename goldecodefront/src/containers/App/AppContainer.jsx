import React from 'react'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import Header from 'components/Header/Header.jsx';
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
class App extends React.Component{

    render(){
        const {classes,...rest} = this.props;
        return(
            <div>
                <Header
                    brand="Material Kit React"
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax image={require("assets/img/header_bg.jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem>
                                <div className={classes.brand}>
                                    <h1 className={classes.title}>Material Kit React.</h1>
                                    <h3 className={classes.subtitle}>
                                        A Badass Material-UI Kit based on Material Design.
                                    </h3>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
            </div>
        )
    }
}

export default withStyles(componentsStyle)(App);