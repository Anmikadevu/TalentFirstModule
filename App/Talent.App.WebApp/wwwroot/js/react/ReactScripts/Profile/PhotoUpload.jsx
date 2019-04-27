/* Photo upload section */
import React, { Component } from 'react';
import Cookies from 'js-cookie';

export default class PhotoUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profilePhotoUrl: null,
            profilePhoto: null,
        }

        this.handleClick = this.handleClick.bind(this)
    };

    handleClick(event) {
        console.log("first image", event.target.files[0]);
        console.log("image name", event.target.files[0].name);
     
      

        const profilePhoto = event.target.files[0].name
        const profilePhotoUrl= "http://localhost:60290/images/"+ event.target.files[0].name
        //this.refs.fileUploader.click();
        console.log("profilephoto",profilePhoto);
        console.log("profilephoto", profilePhotoUrl);
        let data = { 'profilePhoto': profilePhoto, 'profilePhotoUrl': profilePhotoUrl}
        //if (event.target.files && event.target.files[0]) {
        //this.setState({
        //    profilePhoto,
        //    profilePhotoUrl
        //    });

        this.props.saveProfileData(data)
    }
    

    render() {

        return (
            <div className="row">
                <div className="ui sixteen wide column">

                    <div className="two fields">
                        <h2><b> Profile Photo </b></h2>
                      
                         
                        <div className="body-content">
                            <div className="add-media">
                               
                                <input type="file" onChange={this.handleClick} />
                            </div>
                        </div>
                        
                  </div>
                   
                </div>
            </div>

        )

    }
}
