import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionMediaQuery } from '../store/app/actions';

class ResizeContainer extends Component {
    componentDidMount() {
        this.mediaQuery();
        this.resize('resize', this.mediaQuery);
    }

    componentWillUnmount() {
        this.resize('resize', this.mediaQuery);
    }

    resize = (event, callback ) => {
        window.addEventListener(event, callback);
        return () => {
            window.removeEventListener(event, callback);
        }
    };

    mediaQuery = () => {
        const { dispatch } = this.props;
        let width = window.innerWidth;
        let height = window.innerHeight;

	    if(width > 1024) {
            dispatch(actionMediaQuery('desktop', width, height));
        }
        
        if(width <= 1024 && width >= 768) {
            dispatch(actionMediaQuery('tablet', width, height));
        }

        if(width < 768) {
            dispatch(actionMediaQuery('mobile', width, height));
        }


    };

    render() {
        return (
            <div style={ { height: '100%' } }>{ this.props.children }</div>
        )
    }
}

export default connect()(ResizeContainer);
