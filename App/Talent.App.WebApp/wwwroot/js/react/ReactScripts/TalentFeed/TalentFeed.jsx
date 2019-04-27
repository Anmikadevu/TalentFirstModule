import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import TalentCard from '../TalentFeed/TalentCard.jsx';
import { Loader, Card, Icon, Button, Image,Embed } from 'semantic-ui-react';
import CompanyProfile from '../TalentFeed/CompanyProfile.jsx';
import FollowingSuggestion from '../TalentFeed/FollowingSuggestion.jsx';
import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx';

export default class TalentFeed extends React.Component {
    constructor(props) {
        super(props);

        //let loader = loaderData
        //loader.allowedUsers.push("Employer")
        //loader.allowedUsers.push("Recruiter")

        //this.state = {
        //    loadNumber: 5,
        //    loadPosition: 0,
        //    feedData: [],
        //    watchlist: [],
        //    loaderData: loader,
        //    loadingFeedData: false,
        //    companyDetails: null
        //}

        //this.init = this.init.bind(this);

    };

    //init() {
    //    let loader = TalentUtil.deepCopy(this.state.loaderData)
    //    loader.isLoading = false


    //}

    //componentDidMount() {
    //    window.addEventListener('scroll', this.handleScroll);
    //    this.init()
    //};

   
    render() {
        
       
        return (
            
               <Card.Group>
                <Card>
                    <Card.Content>
                        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar size="small" /><br />
                        <Card.Header>MVP Studio</Card.Header>
                        <Card.Meta><Icon name="location arrow"></Icon>Auckland,NewZealand</Card.Meta>
                        <Card.Description>
                        We currently do not have specific skills that we desire
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className="ui two fields">
                        <Icon name="phone"></Icon>:23233<br/>
                        <Icon name="mail"></Icon>:devinaharidas@gmail.com
                      </div>    
                    </Card.Content>
                </Card>
                <h1>hi</h1>
                
               
                <Card floated="right">
                    <Card.Content floated="right">
                        <Card.Header>Follow Talent</Card.Header>
                        <Card.Description>
                            <Image size='tiny'
                                floated="left"
                                src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                            Veronica ossi
                            <br/>
                            
                            <Button basic color='blue'>
                                <Icon name="user" color="blue"></Icon>  Follow
                        </Button>


                        </Card.Description>
                      
                        <Card.Description>
                            <Image size='tiny'
                                floated="left"
                                src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                            Veronica ossi
                            <br />

                            <Button basic color='blue'>
                                <Icon name="user" color="blue"></Icon>  Follow
                        </Button>


                        </Card.Description>
                       
                    </Card.Content>
                    
                </Card>
            </Card.Group>
        
            
            );
        //return (
        //    <BodyWrapper reload={this.init} loaderData={this.state.loaderData}>
               
        //    </BodyWrapper>
        //)
    }
}