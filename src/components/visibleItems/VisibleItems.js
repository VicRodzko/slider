import React from 'react';

import Item from './item/Item';
import './VisibleItems.css';

const visibleItems = props => {
  return (
    <div className="VisibleItems">
      <Item data={props.data} cssClass={props.cssClass} cssClassCnt={props.cssClassCnt} />
    </div>
  );
};

export default visibleItems;
