import React from 'react'
import { SingleInput } from '../Form/SingleInput.jsx';
import { Input } from 'semantic-ui-react'

export default class VisaStatus extends React.Component {
    constructor(props) {
        super(props)
        const details = this.props.status
        this.state = {
            showComponent: false,
            selectedvalue: 'Select Status',
            visaExpiryDate: '',
            visaStatus: '',
            newContact: details
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.renderParent = this.renderParent.bind(this)
        this.renderChild = this.renderChild.bind(this)
        this.additem = this.additem.bind(this)
    }
    handleInputChange(e) {

        this.setState({
          
                [e.target.name]: e.target.value
        })


    }
    additem() {
        let obj = { 'visaStatus': this.state.visaStatus, 'visaExpiryDate': this.state.visaExpiryDate }
       
        console.log("obj", obj);
        const data = Object.assign({}, this.state.newContact, obj)
        console.log("data",data)
        this.props.saveProfileData( data)


    }
    render() {


        return (
            (this.state.visaStatus === 'workvisa' || this.state.visaStatus === 'studentvisa') ?
                this.renderChild() : this.renderParent()

        )

    }

    renderParent() {



        return (

            <div className="ui six wide column" >
                <h4>Visa type</h4>
                <select className="ui search dropdown"
                    name="visaStatus"
                    onChange={this.handleInputChange}
                    value={this.state.visaStatus}>
                    <option defaultValue="select status">Select Status</option>
                    <option value="citizen">Citizen</option>
                    <option value="pr">Permanent Resident</option>
                    <option value="workvisa">WorkVisa</option>
                    <option value="studentvisa">StudentVisa</option>



                </select>
            </div >
        )
    }



    renderChild() {

        return (
            <React.Fragment>
                <div className="ui sixteen wide row" >

                    <div className="ui six wide column">
                        <div className="two wide row">
                            <h4>Visa type</h4>
                           
                        </div>
                        <div className="two wide row">
                            <select className="ui search dropdown"
                                name="visaStatus"
                                onChange={this.handleInputChange}
                                value={this.state.visaStatus}>
                                <option defaultValue="">Select Status</option>
                                <option value="citizen">Citizen</option>
                                <option value="pr">Permanent Resident</option>
                                <option value="workvisa">Work Visa</option>
                                <option value="studentvisa">Student Visa</option>



                            </select>

                        </div>

                        
                        
                        
                       
                    </div>
                    <div className="ui six wide column">

                        <div className="two wide row">
                            <h4>Visa Expiry date</h4>
                        </div>
                        <div className="two wide row ui input">
                            <input type="date"
                                onChange={this.handleInputChange}
                                name="visaExpiryDate"
                                value={this.state.visaExpiryDate}>
                            </input>

                        </div>
                            
                           

                     
                    </div>
                    <div className="ui four wide column">
                       
                        <div className="two fields">
                            <button type="button" className="ui teal button" onClick={this.additem} >Save</button>
                        </div>
                     </div>
                </div>
                
            </React.Fragment>
        )
    }
   
}