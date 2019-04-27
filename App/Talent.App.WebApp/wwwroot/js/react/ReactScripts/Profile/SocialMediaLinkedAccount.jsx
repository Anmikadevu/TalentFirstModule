import React from 'react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup, Button, Icon, Accordion } from 'semantic-ui-react';
import { object } from 'prop-types';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);
        console.log("accounts",this.props.linkedAccounts);
        const details = this.props.linkedAccounts 
           //? Object.assign({}, props.linkedAccounts)
           // : {
           //     linkedIn : "",
           //     github : "",
                
           // }

       console.log("details", details)
        this.state = {


            showEditSection: false,
            newContact: details

        }
        console.log("newContact", this.state.newContact);
       
        this.openEdit = this.openEdit.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
    }

    openEdit() {

        const details = Object.assign({}, this.props.linkedAccounts);
        console.log("details in edit", details)
        this.setState({
            showEditSection: true,
            newContact: details
        })
        console.log("details after edit", this.state.newContact)
    }
    closeEdit() {


        this.setState({
            showEditSection: false

        })
    }
    handleChange(event) {
    
        const linkedAccounts = Object.assign({}, this.state.newContact)
        console.log("linkedaccounts", linkedAccounts)
        linkedAccounts[event.target.name] = event.target.value
       
        this.setState({
            newContact: linkedAccounts
        })
       // this.props.saveStateData({ linkedAccounts });
        console.log("data in new contact", this.state.newContact)
       
      
    }
   saveContact() {

      
       const linkedAccounts = Object.assign({}, this.state.newContact)
      // console.log("data in button click",data)
       this.props.saveProfileData({ linkedAccounts })
      // this.props.controlFunc(this.props.componentId, { data })
        this.closeEdit()
    }

    componentDidMount() {
        $('.ui.button.social-media')
            .popup();
    }



    render() {
        return (

            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
            
            
            );

    }
    renderEdit() {

        return (

            <div className='ui sixteen wide column'>
                <ChildSingleInput
                    inputType="text"
                    label="linkedIn"
                    name="linkedIn"
                    value={this.state.newContact.linkedIn}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your LinkedIn url"
                    errorMessage="Please enter a valid LinkedIn url"
                />
                <ChildSingleInput
                    inputType="text"
                    label="GitHub"
                    name="github"
                    value={this.state.newContact.github}
                   controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your GitHub url"
                    errorMessage="Please enter a valid GitHub url"
                />
                <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
             </div> );
      

    }
    renderDisplay() {

        return (
              <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <div className="ui blue horizontal label"
                            position="relative">in Linkedin</div>
                        <div className=" ui black horizontal label"
                            position="relative"><i className="github icon"></i>GitHub</div>
                    </React.Fragment>
                    <button type="button"
                        className="ui right floated teal button"
                        onClick={this.openEdit}>Edit</button>
                </div>
            </div>



            
            )

    }

}
