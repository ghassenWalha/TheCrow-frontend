import React, { Component } from 'react'


class TEST extends Component {

   constructor(props)
   {
    super(props);
    this.state ={
        selectedTabId: this.props.selectedTabId,

    }
    
   }


    handleTabClick = ({target:{id}}) => {
        console.log(id);
    //do something maybe invoke a fuction if u need to 
        if (this.props.selectedTabId === undefined) {
            this.setState({ selectedTabId:id  });
        }
    };

    render() { 
        return ( 
            <div className="bp3-tabs">
    <ul className="bp3-tab-list {{.modifier}}" role="tablist">
        <li className="bp3-tab" id="1" onClick={this.handleTabClick}  role="tab" aria-selected={"true"}>Selected tab</li>
        <li className="bp3-tab" id="2" onClick={this.handleTabClick}      role="tab">Another tab</li>
        <li className="bp3-tab" id="5"  onClick={this.handleTabClick} role="tab" aria-disabled="true">Disabled tab</li>
    </ul>
    <div className="bp3-tab-panel" role="tabpanel">Selected panel</div>
    <div className="bp3-tab-panel" role="tabpanel" aria-hidden="true">Another panel</div>
    <div className="bp3-tab-panel" role="tabpanel" aria-hidden="true">Disabled panel</div>
</div>
         );
    }
}
 
export default TEST;