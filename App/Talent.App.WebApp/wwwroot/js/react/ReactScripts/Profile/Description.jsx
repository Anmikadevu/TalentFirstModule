import React from 'react';
import Cookies from 'js-cookie';
import { object } from 'prop-types';
export class Description extends React.Component {

    constructor(props) {
        super(props);

        
       
        this.state = {
            characters: 0,
            summary: "",
           description:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    };


    handleChange(event) {

       
        let description = event.target.value;
        this.setState({
            [event.target.name]: event.target.value,
            characters: description.length
        })
    }
    onClick() {
        let data = {
            'summary': this.state.summary, 'description':
                this.state.description
        };
        this.props.controlFunc(this.props.componentId, data)

    }

    render() {
        const characterLimit = 600;
        let characters = this.props.description ? this.props.description.length : 0;

        return (
            <React.Fragment>
                <div className="four wide column">
                    <h3>Description</h3>
                    <div className="tooltip">Write a description of your company.</div>
                </div>
                <div className="ten wide column">
                    <div className="field" >
                        <input type="text"
                            name="summary"
                            value={this.state.summary}
                            onChange={this.handleChange}
                            />
                        <br />
                        <p> Summary must be no more than 150 characters</p>

                        <textarea maxLength={characterLimit}
                            name="description"
                            placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add."
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                           >
                        </textarea>
                    </div>
                    <p>Characters remaining : {characters} / {characterLimit}</p>
                    <button type="button"
                        className="ui right floated teal button"
                        onClick={this.onClick}
                        >Save</button>
                </div>
            </React.Fragment>
        )
    }
}
