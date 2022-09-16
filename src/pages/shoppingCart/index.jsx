import React from 'react';
import './index.css';

const ShoppingCart = () => {
  return (
    <div className="wrapper">
      <div className="title">Shopping Cart</div>
      <table>
        <thead>
          <tr>
            <th className="table-cell align-left">商品名称</th>
            <th className="table-cell align-right">单 价</th>
            <th className="table-cell align-right">数 量</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};


export default ShoppingCart;
