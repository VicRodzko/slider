import React from 'react';

import './Item.css';

const item = props => {
  return (
    <div className={`${props.cssClassCnt}`}>
      {props.data.map(item =>
        item.active ? (
          <div
            className={`Item ${props.cssClass}`}
            key={item.id}
            style={{
              background: `URL(${item.hero})`,
            }}
          >
            <div>
              <div className="Item__small">
                <img src={item.image} alt={item.id} />
                <span>{item.text}</span>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default item;
