import React from 'react'
import { Form, Checkbox, Input } from 'semantic-ui-react';
import { SingleInput } from '../Form/SingleInput.jsx';

export default class TalentStatus extends React.Component {
    constructor(props) {
        super(props);
        const details = this.props.status /*? Object.assign({}, props.status) : {*/

        //    status: "",
        //    availableDate: null
        //}
        console.log("details",details)
        this.state = {

            isActive: false,
            notActive: false,
            currentlyEmployed: false,
            availableLater: false,

            newContact: details


        }
        ////this.onSubmit = this.onSubmit.bind(this)
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this)
    }

    handleCheckBoxChange(e, { value }) {
        this.setState({ value })
       

        let obj = { 'status': this.state.value, 'availableDate': null }
       

        const data = Object.assign({}, obj)
        console.log(data);
        this.setState({

            newContact: data
        })
        console.log("newcontacts", this.state.newContact);
        const jobSeekingStatus = Object.assign({}, this.state.newContact)
        //this.props.controlFunc(this.props.componentId, newData)
        this.props.saveProfileData({ jobSeekingStatus })

    }









    render() {
        



        return (

            <Form>
                <Form.Field>
                    Selected value: <b>{this.state.value}</b>
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='isActive'
                        name='checkboxRadioGroup'
                        value='isActive'
                        checked={this.state.value === 'isActive'}
                        onChange={this.handleCheckBoxChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Not Active'
                        name='checkboxRadioGroup'
                        value='notActive'
                        checked={this.state.value === 'notActive'}
                        onChange={this.handleCheckBoxChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='currentlyEmployed'
                        name='checkboxRadioGroup'
                        value='currentlyEmployed'
                        checked={this.state.value === 'currentlyEmployed'}
                        onChange={this.handleCheckBoxChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='availableLater'
                        name='checkboxRadioGroup'
                        value='availableLater'
                        checked={this.state.value === 'availableLater'}
                        onChange={this.handleCheckBoxChange}
                    />
                </Form.Field>
            </Form>

        )
    }
}