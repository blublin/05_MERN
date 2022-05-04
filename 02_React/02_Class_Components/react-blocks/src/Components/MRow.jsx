import React, { Component } from 'react';
import styles from './css/Master.module.css'
    
class MRow extends Component {
    render() {
        return (
            <div className={ styles.row}>
                { this.props.children }
            </div>
        );
    }
}
    
export default MRow;
