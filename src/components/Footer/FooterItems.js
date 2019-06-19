import React from 'react';

export default function FooterItem(props){
  [itemArray, setItemArray] = setState([]);

  Object.props.items.keys.forEach(function(key, index){
    let imgUrl = './../../Assets/' + footerItems[index] + '.SVG';
    let newItemArray = itemArray.push({key: imgUrl});
    setItemArray(newItemArray);
  })
  return(
    <div
    style={
      {
        zIndex: '2'
      }
    }
    >
      {itemArray}
      
    </div>
  )
}