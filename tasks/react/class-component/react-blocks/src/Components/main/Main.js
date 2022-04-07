import React, { Component } from 'react';
import styles from './Main.module.css';

class Main extends Component {
    render() {
        return(
            <div className={styles.block}>
                {this.props.children}
            </div>
        );
    }
}

export default Main;