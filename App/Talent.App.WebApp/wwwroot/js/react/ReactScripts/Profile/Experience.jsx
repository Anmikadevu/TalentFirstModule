/* Experience section */
import React from 'react';
import Cookies from 'js-cookie';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);
        const details = this.props.experienceData


        this.state = {
            company: '',
            position: '',
            start: '',
            end: '',
            responsibilities: '',

            newContact: details,
            showAddSection: false,
            showEditSection: false,

        }
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        //this.renderEditItem = this.renderEditItem.bind(this)
        this.openHeader = this.openHeader.bind(this)
        this.closeHeader = this.closeHeader.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveData = this.saveData.bind(this)
        this.editItem = this.editItem.bind(this)
       // this.renderUpdate = this.renderUpdate.bind(this)
        this.closeEditItem = this.closeEditItem.bind(this)


        //  this.deleteItem = this.deleteItem.bind(this);
    }

    openHeader() {
        const details = this.props.experienceData
        this.setState({
            newContact: details,
            showAddSection: true
        })

    }
    closeHeader() {
        this.setState({ showAddSection: false })
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    saveData() {
        let obj = {
            'company': this.state.company,
            'position': this.state.position,
            'start': this.state.start,
            'end': this.state.end,
            'responsibilities': this.state.responsibilities
        }
        console.log(obj);
        this.state.newContact.push(obj)
        console.log("newcontact", this.state.newContact);
        const data = Object.assign([], this.state.newContact);
        console.log("data", data);
        this.props.updateProfileData(data);
      

        this.closeHeader()

    }
    editItem() {

        this.setState({
            showEditSection: true

        })


    }
    deleteItem(item) {

        const details = this.props.experienceData

        const index = details.indexOf(item);
        console.log("index", index)
        details.splice(index, 1);
        //console.log("newdetails", newdetails)
        // this.state.newContact.splice(newdetails)
        console.log("newlanguage", this.state.newContact)
        const data = Object.assign([], this.state.newContact);
        console.log("data", data);
        this.props.updateProfileData(data);

    }
    closeEditItem() {


        this.setState({
            showEditSection: false

        })
    }
    render() {
        return (
            this.state.showAddSection ? this.renderEdit() : this.renderDisplay()
            //this.state.showEditSection ? this.renderUpdate() : this.renderDisplay()
        )
    }
    //renderUpdate() {


    //    let list = this.props.experienceData;

    //    console.log("list", list)
    //    //let list = this.state.newLanguage;

    //    let tableData = null;
    //    if (list != "") {
    //        tableData = list.map((item) => <tr key={item.id}>

    //            <React.Fragment>

    //                <div className="ui sixteen wide row" >
    //                    <div className="four fields">
    //                        <ChildSingleInput
    //                            inputType="text"

    //                            name="name"
    //                            value={item.name}
    //                            controlFunc={this.handleChange}
    //                            maxLength={80}
    //                            placeholder="Enter your first name"

    //                        />
    //                        <ChildSingleInput
    //                            inputType="text"

    //                            name="level"
    //                            value={item.level}
    //                            controlFunc={this.handleChange}
    //                            maxLength={80}
    //                            placeholder="Enter your last name"

    //                        />

    //                        <button className="ui blue basic button" >Update</button>
    //                        <button className="ui red basic button" onClick={this.closeEditItem}>Cancel</button>
    //                    </div>
    //                </div>
    //                <td className="seven wide">{item.name}</td>
    //                <td className="seven wide">{item.level}</td>

    //                <td className="one wide"><a onClick={this.editItem}><i className="pencil icon"></i></a></td>
    //                <td className="one wide"><a onClick={this.deleteItem}><i className="close icon"></i></a></td>
    //            </React.Fragment>




    //        </tr>)
    //    }
    //    //console.log("tabledata", tableData);

    //    return (<div className="row">
    //        <div className="ui sixteen wide column">
    //            <div className="ui segments">
    //                <table className="ui single line table">
    //                    <thead>
    //                        <tr>
    //                            <th>Language</th>
    //                            <th>Level</th>
    //                            <th><button className="ui right floated secondary button" onClick={this.openHeader}>
    //                                <i className="plus square icon"> </i>Add New</button></th>
    //                        </tr>
    //                    </thead>
    //                    <tbody>

    //                        {tableData}
    //                    </tbody>
    //                </table>
    //            </div>
    //        </div>
    //    </div>
    //    )







    //}
    renderDisplay() {
        let list = this.props.experienceData;
     
        let tableData = null;
        if (list != "") {
            tableData = list.map((item,index) => <tr key={index}>

                <React.Fragment>
                    
                    <td className="seven wide">{item.company}</td>
                    <td className="seven wide">{item.position}</td>
                    <td className="seven wide">{item.start}</td>
                    <td className="seven wide">{item.end}</td>
                    <td className="seven wide">{item.responsibilities}</td>

                    <td className="one wide"><a onClick={this.editItem}><i className="pencil icon"></i></a></td>
                    <td className="one wide"><a onClick={() => this.deleteItem(item)}><i className="close icon"></i></a></td>
                </React.Fragment>


                
                </tr>

         )
        }
        //console.log("tabledata", tableData);

        return (<div className="row">
            <div className="ui sixteen wide column">
                <div className="ui segments">
                    <table className="ui single line table">
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Position</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Resposibilities</th>

                                <th><button className="ui right floated secondary button" onClick={this.openHeader}>
                                    <i className="plus square icon"> </i>Add New</button></th>
                            </tr>
                        </thead>
                        <tbody>

                            {tableData}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }

    renderEdit() {

        return (
            <React.Fragment>
                <div className="ui sixteen wide column" >
                    <div className="four fields">
                        <div className="ui four wide column">
                            <div className="two fields">
                                <h4>Company:</h4>
                                <input type="text"
                                    name="company"
                                    placeholder="Add Company"
                                    value={this.state.company}
                                    onChange={this.handleChange} />
                                <h4>Position:</h4>
                                <input type="text"
                                    name="position"
                                    placeholder="Add Position"
                                    value={this.state.position}
                                    onChange={this.handleChange} />


                            </div>
                        </div>


                    </div>
                    <div className="four fields">
                        <div className="ui four wide column">
                            <div className="two fields">
                                <h4>StartDate:</h4>
                                <input type="date"
                                    name="start"

                                    placeholder="Add start date"
                                    value={this.state.start}
                                    onChange={this.handleChange} />
                                <h4>EndDate:</h4>
                                <input type="date"

                                    name="end"
                                    placeholder="Add end date"
                                    value={this.state.end}
                                    onChange={this.handleChange} />


                            </div>
                        </div>


                    </div>
                    <div className="one field">
                        <h4>Resposibilities:</h4>
                        <input type="text"
                            name="responsibilities"
                            placeholder="Add Responsibilities"
                            value={this.state.responsibilities}
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    

                </div>
                <div className="ui three wide column">
                    <button type="button" className="ui button" onClick={this.saveData}>Save</button>
                </div>
                <div className="ui three wide column">
                    <button type="button" className="ui button" onClick={this.closeHeader}>Cancel</button>
                </div>
                <div className="ui sixteen wide column">
                    {this.renderDisplay()}
                </div>
            </React.Fragment>

        )
    }

}












