import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';

import theme from './theme';
import './theme/reset';
// import asyncComponent from './containers/async-component-container'

// const AsyncLanding = asyncComponent(() => import("./landing"));

const Container = styled.div`
`;

const App = ({ location }) => {

    // const documents = ['terms', 'policy', 'policy_cookies', 'privacy_policy', 'rds'];
    // const contacts = ['contacts', 'partnership'];
    // const advantages = ['finance', 'customer_service', 'reliability'];
    // const advantagesReg = `${ advantages.join('|') }`;
    // const contactsReg = `${contacts.join('|')}`;
    // const documentReg = `${documents.join('|')}`;
    // const page = `/:doc(${documentReg})`;
    // const contactsPage = `/:cont(${contactsReg})`;
    // const advantagesPage = `/:advantages(${ advantagesReg })`;

    return (
        /* todo think about dynamically changing theme */
        <ThemeProvider theme={theme.light}>
            <Container>
				{/*<Switch>*/}
					{/*<Route exact path='/' component={  }/>*/}
				{/*</Switch>*/}
            </Container>
        </ThemeProvider>
    );
};


export default withRouter(App);
