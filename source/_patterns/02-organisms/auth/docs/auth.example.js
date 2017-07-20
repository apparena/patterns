import React from "react";
import {Auth} from "apparena-patterns-react";

export default function AuthExample() {
    logIn(console.log(null));

    return (
        <Auth
            loginHeader="Get Started"
            authButtonTest="Sign In"
            LogoURI="https://material.io/guidelines/static/spec/images/callouts/default.svg"
            onAuthClick={this.logIn}>
            <TextArea placeholder="Username"/>
            <TextArea placeholder="Password"/>
        </Auth>
    )
}

/*;;usage
 <AuthExample />
 ;;*/