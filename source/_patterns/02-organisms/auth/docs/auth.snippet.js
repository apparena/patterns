import React from 'react';
import {Auth, TextArea} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    render(){
        return(
            <Auth
            loginHeader="Get Started"
            authButtonTest="Sign In"
            LogoURI="example.com/logo"
            onAuthClick={this.logIn}>
                <TextArea placeholder="Username" />
                <TextArea placeholder="Password" />
            </Auth>
        )
    }
}