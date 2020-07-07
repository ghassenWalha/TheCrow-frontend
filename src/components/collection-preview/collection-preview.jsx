import React, { Component } from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

class CollectionPreview extends Component {

  
  render() { 
    const {category,itemsList}= this.props.preview;
    return (
      <div className='collection-preview'>
        <h1 className='title'>{category.toUpperCase()}</h1>
        <div className='preview'>
          {itemsList
            .filter((item,idx) => idx < 4)
            .map(({ _id, ...otherItemProps }) => (
              <CollectionItem key={_id} id={_id} {...otherItemProps} />
            ))}
        </div>
      </div>
    );
  }
}
 








export default CollectionPreview;
