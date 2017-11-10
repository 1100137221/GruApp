import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import PropTypes from "prop-types";
const TextColorDark = "#535151";
const TextColorNormal = "#595757";
const TextColorSemiLight = "#666666";
const TextColorLight = "#999999";
const TextColorMinorLight = "#b2b2b2";
const TextColorSuperLight = "#cccccc";
const TextColorWhite = "#ffffff";
const TextColorLightGreen = "#55b1a3";
const TextColorTransparent = "#dddddd";
const TextColorSwitchBlue = "#61b6a9";

/**
 * fontSize
 * color
 * text
 */
export default class NiceText extends React.Component {
  constructor(props) {
    super(props);
  }

  _getColor() {
    switch (this.props.color) {
    case "dark":
      return TextColorDark;
    case "normal":
      return TextColorNormal;
    case "semi-light":
      return TextColorSemiLight;
    case "light":
      return TextColorLight;
    case "white":
      return TextColorWhite;
    case "minor-light":
      return TextColorMinorLight;
    case "super-light":
      return TextColorSuperLight;
    case "light-green":
      return TextColorLightGreen;
    case "transparent":
      return TextColorTransparent;
    case "switch-blue":
      return TextColorSwitchBlue;
    default:
      return "black";
    }
  }

  _getLineHeight(){
    if(!this.props.lineHeight)
      return 0;
    return this.props.lineHeight;
  }

  render() {
    return (
      <Text
        {...this.props}
        style={{
          color: this._getColor(),
          fontSize: this.props.fontSize,
          lineHeight:this._getLineHeight(),
          ...this.props.style, // override styles before
        }}>{this.props.text}</Text>
    );
  }
}

NiceText.propTypes = {
  fontSize: PropTypes.number,
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["", "dark", "normal", "semi-light", "light", "minor-light", "super-light", "white", "light-green", "transparent", 'switch-blue']).isRequired
};