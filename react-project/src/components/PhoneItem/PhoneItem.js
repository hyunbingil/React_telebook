import React from 'react';
import "./PhoneItem.css";

const PhoneItems = () => {
    return (
        <div className="phone_item">
          <div className="phone_item_left">
            <div className="phone_item_name">이장준</div>
            <div className="phone_item_phone">010-0303-0731</div>
          </div>
          <div className="phone_item_right">
            <button>삭제</button>
          </div>
        </div>
    )
}

export default PhoneItems;