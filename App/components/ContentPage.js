import React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';


export const PADDING_RIGHT = 20;
export const PADDING_LEFT = 20;
export const PADDING_TOP = 0;
export const PADDING_BOTTOM = 0;


class ContentPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View
            style={{
              paddingRight: PADDING_RIGHT,
              paddingLeft: PADDING_LEFT,
              paddingTop: PADDING_TOP,
              paddingBottom: PADDING_BOTTOM,
              ...this.props.style
            }}
          >
            {this.props.children}
          </View>
        );
    }
}

ContentPage.propTypes = {

};

export default ContentPage;