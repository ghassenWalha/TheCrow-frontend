import React from 'react';
import './new-directory.jquery.js';
import './new-directory.styles.css'

const NewDirectory = () => {
    return (  
        <div class="container-fluid" id="shop">
			<div class="row">
				<div id="effect" class="effects clearfix row">
					<div class="col-md-4 left nopadding"
                      style={
                        { backgroundImage : 'url("https://i.ibb.co/cvpntL1/hats.png") no repeat'}}>
						
						{/* <div class="clearfix"></div> */}
						{/* <div class="left-box-btm box"> */}
                            <div class="img"
                           > 
								/<img src="https://i.ibb.co/cvpntL1/hats.png" alt="Limited Edition"/>
								<div class="overlay">
									<a href="#" class="expand">limited edition</a>
									<a class="close-overlay hidden">x</a>
								</div>
							{/* </div> */}
						</div>
					</div>
					<div class="col-md-4 mid nopadding d-flex">
						<div class="mid-box-1 box">
							<div class="img">
								<img src="https://i.ibb.co/GCCdy8t/womens.png" alt="Shop Bags"/>
								<div class="overlay">
									<a href="#" class="expand">shop bags</a>
									<a class="close-overlay hidden">x</a>
								</div>
							</div>
						</div>
						<div class="mid-box-2 box">
							<div class="img">
								<img src="https://i.ibb.co/R70vBrQ/men.png" alt="Shop Bikes"/>
								<div class="overlay">
									<a href="#" class="expand">shop bikes</a>
									<a class="close-overlay hidden">x</a>
								</div>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="col-md-4 right nopadding">
						<div class="right-box-1 box">
							<div class="img">
								<img src="https://i.ibb.co/px2tCc3/jackets.png" alt="Shop Now" />
								<div class="overlay">
									<a href="#" class="expand">shop now</a>
									<a class="close-overlay hidden">x</a>
								</div>
							</div>
						</div>
						<div class="right-box-2 box">
							<div class="img">
								<img src="https://i.ibb.co/0jqHpnp/sneakers.png" alt="Shop Seats" />
								<div class="overlay">
									<a href="#" class="expand">shop seats</a>
									<a class="close-overlay hidden">x</a>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
       
    );
}
 
export default NewDirectory;