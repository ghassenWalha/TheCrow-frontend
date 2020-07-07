import React from 'react';
import {connect} from 'react-redux';

import {loadDirectories} from '../../store/directories-slice/directories'
import {loadPreviews} from '../../store/previews-slice/previews';


import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component {


 
  componentDidMount()
  { 
    
    const { loadPreviews } = this.props;
loadPreviews();
   
  }

  render() {
    const { previewsList } = this.props;
    return (
      <div className='shop-page'>
        {previewsList.map(( preview ) => (
          <CollectionPreview key={preview.category} preview={preview} />
        ))}
      </div>
    );
  }
}


const mapStateToProps = ({previews:{previewsList},directories:{directoriesList}}) => ({
  previewsList,
  directoriesList
});
const mapDispachToProps = dispatch => ({
  
  loadDirectories:()=> dispatch(loadDirectories()),
  loadPreviews: (list,category) =>dispatch(loadPreviews(list,category))

  });


export default connect(mapStateToProps,mapDispachToProps)(ShopPage);

