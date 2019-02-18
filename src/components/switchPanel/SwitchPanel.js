import React from 'react';

import './SwitchPanel.css';

const switchPanel = props => {
  return (
    <div className="SwitchPanel">
      <div onClick={props.prevSlider}>
        <i class="fas fa-backward" />
      </div>
      <div>
        <p>{props.count}</p>
      </div>
      <div onClick={props.nextSlider}>
        <i class="fas fa-forward" />
      </div>
    </div>
  );
};

export default switchPanel;
