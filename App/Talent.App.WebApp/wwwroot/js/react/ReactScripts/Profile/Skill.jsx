import React from 'react';
import Cookies from 'js-cookie';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export default class Skill extends React.Component {
    constructor(props) {
        super(props);
        const details = this.props.skillData


        this.state = {
            name: "",
            level: "",
                id:'',
            newContact: details,
            showAddSection: false,
            showEditSection: false,

        }
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
       // this.renderEditItem = this.renderEditItem.bind(this)
        this.openHeader = this.openHeader.bind(this)
        this.closeHeader = this.closeHeader.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveData = this.saveData.bind(this)
        this.onEditHandle = this.onEditHandle.bind(this)
        this.renderUpdate = this.renderUpdate.bind(this)
       // this.closeEditItem = this.closeEditItem.bind(this)
        this.closeEditSection = this.closeEditSection.bind(this)
        this.onUpdateHandle = this.onUpdateHandle.bind(this)
         this.deleteItem = this.deleteItem.bind(this);
    }

    openHeader() {
        const details = this.props.skillData
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
        let obj = { 'name': this.state.name, 'level': this.state.level }
       
        this.state.newContact.push(obj)
        
        const data = Object.assign([], this.state.newContact)
        this.props.updateProfileData(data)

        this.closeHeader();
    }
    onEditHandle(id,name,level) {
             
        this.setState({
            showEditSection: true,
       
            id,
            name,
            level
           
        })
      
        
    }
    onUpdateHandle(event) {
        console.log("id to be updated", this.state.id)
        console.log("updatedname", this.state.name)
        console.log("updatedlevel", this.state.level)
        let details = this.props.skillData
        let updatedIndexArray = details.findIndex(x => x.id == this.state.id);
        console.log("updatedIndexarray", updatedIndexArray)
        details.splice(updatedIndexArray, 1, { name: this.state.name, level: this.state.level, id: this.state.id })
        console.log("updatedItem", details)
        this.props.updateProfileData({

            languages:details
        })
        this.setState({

            showEditSection:false
        })
           
    }    
    deleteItem(item) {

        const details = this.props.skillData


        const index = details.indexOf(item);
        console.log("index", index)
        details.splice(index, 1);
        //console.log("newdetails", newdetails)
        // this.state.newContact.splice(newdetails)
        console.log("newContact", this.state.newContact)
        const data = Object.assign([], this.state.newContact);
        console.log("data", data);
        this.props.updateProfileData(data);

    }
   
    closeEditSection() {


        this.setState({
            showEditSection:false

        })
        
    }
   
    render() {
        return (
            this.state.showAddSection ? this.renderEdit() : this.renderDisplay(),
            this.renderUpdate()
           
        )
    }
    renderUpdate() {
        console.log(this.props.skillData)
       
           
        if (this.state.showEditSection) {
            return (
                <div className="row">
                  
                    <div className="ui sixteen wide column">
                        <div className="ui segments">
                            <table className="ui single line table">
                                <thead>
                                    <tr>
                                        <th>Skill</th>
                                        <th>Level</th>
                                        <th><button className="ui right floated secondary button" onClick={this.openHeader}>
                                            <i className="plus square icon"> </i>Add New</button></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <div className="inline fields">
                                        <div className="ui five wide column">
                                            <input type="text"
                                                name="name"
                                                value={this.state.name}
                                                onChange={this.handleChange}

                                                placeholder="Add Skill"

                                            />
                                        </div>
                                        <div className="ui five wide column">
                                            <select className="ui right labeled dropdown"
                                                name="level"
                                                value={this.state.level}
                                                onChange={this.handleChange}
                                            >
                                                {/*<option value="">LanguageLevel</option>
                        {languageLevelOptions}*/}
                                                <option value="">LanguageLevel</option>
                                                <option value="beginner">Beginner</option>
                                                <option value="intermediate">Intermediate</option>
                                                <option value="expert">Expert</option>

                                            </select>

                                        </div>
                                        <div className="ui three wide column">
                                            <button type="button" className="ui button" onClick={this.onUpdateHandle} >Update</button>
                                        </div>
                                        <div className="ui three wide column">
                                            <button type="button" className="ui button" onClick={this.closeEditSection}>Cancel</button>
                                        </div>
                                        <div className="ui sixteen wide column">

                                        </div>


                                    </div>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        }
        else {


            return ( this.renderDisplay() )
        
        }  
       
        
    }
    renderDisplay() {
        let list = this.props.skillData;
        //let list = this.state.newContact;
        let tableData = null;
        if (list != "") {
            tableData = list.map((item, index) => <tr key={index}>

                <React.Fragment>
                    <td className="seven wide">{item.name}</td>
                    <td className="seven wide">{item.level}</td>

                    <td className="one wide"><a onClick={() => this.onEditHandle(item.id, item.name, item.id)}><i className="pencil icon"></i></a></td>
                    
                    <td className="one wide"><a onClick={() => this.deleteItem(item)}><i className="close icon"></i></a></td>
                </React.Fragment>




            </tr>)
        }
        //console.log("tabledata", tableData);

        return (<div className="row">
            <div className="ui sixteen wide column">
                <div className="ui segments">
                    <table className="ui single line table">
                        <thead>
                            <tr>
                                <th>Skill</th>
                                <th>Level</th>
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
                <div className="ui five wide column">

                    
                        <input type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        maxLength={80}
                        placeholder="Add Skill"
                       
                    />
                </div>
                <div className="ui five wide column">
                    <select className="ui right labeled dropdown"
                        value={this.state.level}
                        onChange={this.handleChange}
                        name="level">
                        {/*<option value="">LanguageLevel</option>
                        {languageLevelOptions}*/}
                        <option value="">LanguageLevel</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                        
                    </select>

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





