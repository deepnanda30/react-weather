import React from 'react';  
import PropTypes from 'prop-types';

const video = (props) => 
{
  playsInline: PropTypes.bool,            
  disableBackgroundCover: PropTypes.bool,  
  style: PropTypes.object,
  className: PropTypes.string,
  containerWidth: PropTypes.number.isRequired,
  containerHeight: PropTypes.number.isRequired,
  src: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.array   
  ]).isRequired,
  poster: PropTypes.string,
  horizontalAlign: PropTypes.number,
  verticalAlign: PropTypes.number,
  preload: PropTypes.string,
  muted: PropTypes.bool,  
  loop: PropTypes.bool,
  volume: PropTypes.number,
  autoPlay: PropTypes.bool,
  extraVideoElementProps: PropTypes.object,
  startTime: PropTypes.number,
  tabIndex: PropTypes.number,
  onReady: PropTypes.func, 
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onMute: PropTypes.func,
  onUnmute: PropTypes.func,
  onTimeUpdate: PropTypes.func, 
  onEnd: PropTypes.func,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func
}

 export default video;