import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component/index';

import Card from '../../01-molecules/card';
import Button from '../../00-atoms/button/docs';

export default class Auth extends ReactComponent {


    renderContextInfo() {
        if (this.props.contextInfoText && this.props.contextInfoTitle)
            return (
                <div className="card card-block">
                    <h4 className="card-title">{this.props.contextInfoTitle}</h4>
                    <p className="card-text">{this.props.contextInfoText}</p>
                </div>
            );
    }

    render() {
        return (
            <div className="o-login">
                <div className="o-login-logo text-center">
                    <img src={this.props.logoURI} className="logo" alt="App-Arena.com"/>
                </div>

                {this.renderContextInfo()}

                <Card>
                    <div className="card-header">
                        {this.props.loginHeader}
                    </div>

                    <div className="card-block">
                        {this.props.children}
                    </div>

                    <div className="card-footer text-right">
                        <Button buttonClass="btn btn-primary" onClickMethod={this.props.onAuthClick}>
                            <p>{this.props.authButtonText}</p>
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }
}

Auth.propTypes = {
  contextInfoTitle: PropTypes.string,
  contextInfoText: PropTypes.string,
  loginHeader: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  authButtonText: PropTypes.string.isRequired,
  logoURI: PropTypes.string.isRequired,
  onAuthClick: PropTypes.func.isRequired
};
