import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import LoggedInBanner from '../../Layout/Banner/LoggedInBanner.jsx';
import { LoggedInNavigation } from '../../Layout/LoggedInNavigation.jsx';
import { JobSummaryCard } from './JobSummaryCard.jsx';
import { BodyWrapper, loaderData } from '../../Layout/BodyWrapper.jsx';
import { Pagination, Icon, Dropdown, Checkbox, Accordion, Form, Segment, CardGroup, Card, Label, Button } from 'semantic-ui-react';

export default class ManageJob extends React.Component {
    constructor(props) {
        super(props);
        let loader = loaderData
        loader.allowedUsers.push("Employer");
        loader.allowedUsers.push("Recruiter");
        //console.log(loader)
        this.state = {
            Title:"List of Jobs",
            loadJobs: [{
                title: '',
                summary: '',
                location: { country: '', city: '' }


            }],
            loaderData: loader,
            activePage: 1,
            sortBy: {
                date: "desc"
            },
            filter: {
                showActive: true,
                showClosed: false,
                showDraft: true,
                showExpired: true,
                showUnexpired: true
            },
            totalPages: 1,
            activeIndex: ""
        }
        this.loadData = this.loadData.bind(this);
        this.init = this.init.bind(this);
        this.loadNewData = this.loadNewData.bind(this);
        //your functions go here
    };

    init() {
        //let loaderData = TalentUtil.deepCopy(this.state.loaderData)
        //loaderData.isLoading = false;
        //this.setState({ loaderData });//comment this

        //set loaderData.isLoading to false after getting data
        this.loadData(() =>
            this.setState({ loaderData }),
            loaderData.isLoading = false
        )

        //console.log(this.state.loaderData)
    }

    componentDidMount() {
        this.init();
    };

    loadData(callback) {
        var link = 'http://localhost:51689/listing/listing/getSortedEmployerJobs';
        var cookies = Cookies.get('talentAuthToken');
        // your ajax call and other logic goes here
        $.ajax({
            url: 'http://localhost:51689/listing/listing/getSortedEmployerJobs',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            contentType: "application/json",
            data : {
                activePage: this.state.activePage,
                sortbyDate: this.state.sortBy.date,
                showActive: this.state.filter.showActive,
                showClosed: this.state.filter.showClosed,
                showDraft: this.state.filter.showDraft,
                showExpired: this.state.filter.showExpired,
                showUnexpired: this.state.filter.showUnexpired

            },
            dataType: "json",
            success: function (jobs) {
                if (jobs.myJobs) {
                    this.state.loadJobs = jobs.myJobs
                }
               // console.log("result", this.state.loadJobs)
                callback();

            }.bind(this),

             error: function (res) {
                console.log("error");
                callback();
            }




        })
    }

    loadNewData(data) {
        var loader = this.state.loaderData;
        loader.isLoading = true;
        data[loaderData] = loader;
        this.setState(data, () => {
            this.loadData(() => {
                loader.isLoading = false;
                this.setState({
                    loadData: loader
                })
            })
        });
    }

    render() {
        let jobIndividualItems = this.state.loadJobs;
       console.log("jobitems",jobIndividualItems)
        let jobCardItems = null;
        if (jobIndividualItems != null) {

            jobCardItems = jobIndividualItems.map(items =>
                <Card key={items._id}>
                    <Card.Content>
                        <Card.Header>{items.title}</Card.Header>
                        <a className="ui black right ribbon label"><i className="user icon"></i></a>
                        <br />
                        <Card.Meta>{items.location.city},{items.location.country} </Card.Meta>
                        <Card.Description>{items.summary}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <Button color="red" floated="left" size="mini">Expired</Button>
                    <Button.Group floated="right" size="mini">
                        <Button className="ui blue basic"><Icon name="ban" />Close</Button>
                        <Button className="ui blue basic"><Icon name="edit" />Edit</Button>
                        <Button className="ui blue basic"><Icon name="copy" />Copy</Button>
                        </Button.Group>
                    </Card.Content>
                </Card>
                ) 
             
        }  
        

       return (
           <BodyWrapper reload={this.init} loaderData={this.state.loaderData}>
               <section className="page-body">
                  <div className="ui container">
                    <h1>{this.state.Title}</h1>
                    <i className="filter icon"></i> Filter:
                    <i className="dropdown icon"></i>
                    <div className="ui simple dropdown item" >
                        <i className="calendar alternate outline icon"></i>
                        Sort By Date:
                               <i className="dropdown icon"></i>
                       
                    </div>
                       <br />
                       <br />
                    {/*jobcard goes here*/}
                       <div className="ui three cards">
                           {jobCardItems} 
                       </div>
                    {/*jobcard goes here*/}
                    {/*Pagination goes here*/}
                    <br />
                    <br />
                    <br />
                    <div align="center">
                        <div  className=" ui pagination menu" >
                                <a className="item">
                                     <i className="left angle double chevron icon"></i>
                                </a>
                                <a className="item">
                                      <i className="left angle chevron icon"></i>
                                </a>
                               
                                <a className="item">
                                    <i className="right angle chevron icon"></i>
                                </a>
                               
                                <a className="item">
                                      <i className="right angle double chevron icon"></i>
                                </a>

                   
                        </div>
                    </div>
                    {/*Pagination goes here*/}
                    
                   </div>
               </section>
            </BodyWrapper>
        )
    }
}
