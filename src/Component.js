import React from 'react';

const items = ['good', 'bad', 'ugly'];

const ItemList = () => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
	  <Component otherKey={item} />
	</li>
      ))}
    </ul>
  );
};

const Component = props => {
  const result = {
    good: <h1>Good</h1>,
    bad: <h1>Bad</h1>,
    ugly: <h1>Ugly</h1>,
  }

  return result[props.otherKey];
}

export default ItemList;
