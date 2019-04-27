import React from 'react';
import Cookies from 'js-cookie';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export default class Language extends React.Component {
    constructor(props) {
        super(props);
        const details =this.props.languageData 
            

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
        //this.renderEditItem = this.renderEditItem.bind(this)
        this.openHeader = this.openHeader.bind(this)
        this.closeHeader = this.closeHeader.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveData = this.saveData.bind(this)
        this.editItem = this.editItem.bind(this)
       // this.renderUpdate = this.renderUpdate.bind(this)
        this.closeEditItem = this.closeEditItem.bind(this)
        

       
    }

    openHeader() {
        const details = this.props.languageData
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
        let name = this.state.name
        let level = this.state.level
        this.state.newContact.push({ name, level })
        const data = Object.assign([], this.state.newContact)
        this.props.updateProfileData(data)
        console.log("new array", data);
       
        this.closeHeader()

    }
    editItem(id,name,level) {

        this.setState({
            showEditSection: true,
            id,
            name,
            level

        })


    }
    onUpdateHandle(id) {
        console.log("id to be updated", this.state.id)
        console.log("updatedname", this.state.name)
        console.log("updatedlevel", this.state.level)
        let details = this.props.languageData
        let updatedIndexArray = details.findIndex(x => x.id == this.state.id);
        console.log("updatedIndexarray", updatedIndexArray)
        details.splice(updatedIndexArray, 1, { name: this.state.name, level: this.state.level, id: this.state.id })
        console.log("updatedItem", details)
        this.props.updateProfileData({

            languages: details
        })
        this.setState({

            showEditSection: false
        })

    }    
    deleteItem(item) {

        const details = this.props.languageData
     

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
           
        )
    }
    renderDisplay() {


        let list = this.props.languageData;

        console.log("list",list)
        //let list = this.state.newLanguage;
      
        let tableData = null;

        
            if (list != "") {
                tableData = list.map((item) => <tr key={item.id}>
                    {this.state.showEditSection && (item.id === this.state.id) ?

                        <React.Fragment>

                            <div className="ui sixteen wide row" >
                                <div className="four fields">
                                    <ChildSingleInput
                                        inputType="text"

                                        name="name"
                                        value={this.state.name}
                                        controlFunc={this.handleChange}
                                        maxLength={80}
                                        placeholder="Enter your first name"

                                    />
                                    <div className="ui five wide column">
                                        <select className="ui right labeled dropdown"
                                            value={this.state.level}
                                            onChange={this.handleChange}
                                            name="level">

                                            <option value="">LanguageLevel</option>
                                            <option value="basic">Basic</option>
                                            <option value="conversational">Conversational</option>
                                            <option value="fluent">Fluent</option>
                                            <option value="native">Native</option>
                                        </select>

                                    </div>

                                    <button className="ui blue basic button" onClick={this.onUpdateHandle.bind(this, item.id)} >Update</button>
                                    <button className="ui red basic button" onClick={this.closeEditItem}>Cancel</button>
                                </div>
                            </div>
                        </React.Fragment>





                        :


                        <React.Fragment>

                            <td className="seven wide">{item.name}</td>
                            <td className="seven wide">{item.level}</td>

                            <td className="one wide"><a onClick={this.editItem.bind(this, item.id, item.name, item.level)}><i className="pencil icon"></i></a></td>
                            <td className="one wide"><a onClick={this.deleteItem.bind(this, item)}><i className="close icon"></i></a></td>
                        </React.Fragment>
                    }
                        
                        </tr>)
            
            }
             

            

        


        

  

 
console.log("tabledata", tableData);

        return (<div className="row">
            <div className="ui sixteen wide column">
                <div className="ui segments">
                    <table className="ui single line table">
                        <thead>
                            <tr>
                                <th>Language</th>
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
                       placeholder="Add Language"
                       />
                </div>
                <div className="ui five wide column">
                    <select className="ui right labeled dropdown"
                        value={this.state.level}
                        onChange={this.handleChange}
                        name="level">
                        
                        <option value="">LanguageLevel</option>
                        <option value="basic">Basic</option>
                        <option value="conversational">Conversational</option>
                        <option value="fluent">Fluent</option>
                        <option value="native">Native</option>
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

//class UpdateLanguage extends React.Component {
//    constructor(props) {
//        super(props)

//        this.setState = {

            

//        }

//    }
  

    
//    render() {
     
        
//        );
//    }
//}



