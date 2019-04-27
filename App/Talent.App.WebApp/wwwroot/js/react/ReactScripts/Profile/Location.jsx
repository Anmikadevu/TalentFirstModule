import React from 'react'
import Cookies from 'js-cookie'

import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { object } from 'prop-types';

export class Address extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        console.log("details", props.address)
        const details =this.props.address 
      
         this.state = {
             
                
             //number: "",
             //street: "",
             //suburb: "",
             //country: "",
             //city: "",
             //postCode: "",
             showEditSection: false,
             newContact: details
            
        }
        console.log("intial", this.state.newContact)
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }


    openEdit() {
        const details =  this.props.address
        this.setState({
            showEditSection: true,
            newContact: details
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {

        const data = Object.assign({}, this.state.newContact)

        data[event.target.name] = event.target.value

        this.setState({
            newContact: data
        })

        
    }

    saveContact() {
       
        console.log("newcontact", this.state.newContact);
        const address = Object.assign({}, this.state.newContact);
        //console.log("data", data);
        this.props.saveProfileData({address});
      // this.props.controlFunc(this.props.componentId, data)
        this.closeEdit();
    }  

    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }


    renderEdit() {
        return (

            <div className='ui sixteen wide row'>
                <div className='ui four wide column'>
                   
                        <input type="text"
                        label="Number"
                        name="number"
                        value={this.state.newContact.number}
                        onChange={this.handleChange}
                        maxLength={80}
                        placeholder="Enter your number"
                      
                    />

                </div>
                <div className="ui eight wide column">
                    <input type="text"
                        label="Street"
                        name="street"
                        value={this.state.newContact.street}
                        onChange={this.handleChange}
                        maxLength={80}
                        placeholder="Enter your street"
                      
                    />

                </div>
                <div className="ui four wide column">
                    <input type="text"
                        label="Suburb"
                        name="suburb"
                        value={this.state.newContact.suburb}
                        onChange={this.handleChange}
                        maxLength={80}
                        placeholder="Enter your suburb"
                       
                    />
                </div>


                <div className='ui six wide column'>
                    
                        <input type="text"
                        label="country"
                        name="country"
                        value={this.state.newContact.country}
                        onChange={this.handleChange}
                        maxLength={80}
                        placeholder="Enter the country"
                       
                    />
                </div>
                <div className='ui six wide column'>
                   
                        <input type="text"
                        label="city"
                        name="city"
                        value={this.state.newContact.city}
                        onChange={this.handleChange}
                        maxLength={80}
                        placeholder="Enter your city"
                       
                    />
                </div>
                <div className='ui four wide column'>


                   
                       <input type="number"
                        label="PostCode"
                        name="postCode"
                        value={this.state.newContact.postCode}
                        onChange={this.handleChange}
                        maxLength={80}
                        placeholder="Enter your postcode"
                      
                    />

                </div>
                <br />
                <br />
                <br />
                <br />

                <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
            </div>

        )
    }

    renderDisplay() {
        console.log("details", this.props.address)

        let number = this.props.address ? this.props.address.number : ""
        let street = this.props.address ? this.props.address.street : ""
        let subrub = this.props.address ? this.props.address.subrub : ""
        let postCode = this.props.address ? this.props.address.postCode : ""
        let city = this.props.address ? this.props.address.city : ""
        let country= this.props.address ? this.props.address.country : ""
       
        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <p>Address:{number}{street}{subrub}{postCode} </p>
                        <p>city:{city} /</p>
                        <p>country:{country} </p>
                    </React.Fragment>
                    <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
                </div>
            </div>
        )
    }
}
export class Nationality extends React.Component {
    constructor() {
        super()
        this.state = {

            value: 'select'

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({

            [e.target.name]: e.target.value

        })
        let data = { 'nationality': this.state.value }


        this.props.controlFunc(this.props.componentId, data)
    }


    render() {
        return (
            <div className="ui four wide column">
                <select className="ui search dropdown"
                    id="nationality"
                    name="value"
                    onChange={this.handleChange}
                    value={this.state.value}
                >
                    <option value="select">Select</option>
                    <option value="India">India</option>
                    <option value="Newzealand">Newzealand</option>
                    <option value="Australia">Australia</option>


                </select>
            </div>
        )

    }
}
