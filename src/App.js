import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Lesson1 from './components/Lesson1';
import Lesson2 from './components/Lesson2';
import { GlobalStyles } from './components/styles/Global';
import HomeTempate from './layouts/HomeTemplate/HomeTempate';
import Comfirm from './pages/Question/Comfirm';
import Questions from './pages/Question/Questions';


const theme = {
    colors: {
        primary: '#004DFF',
        secondary: '#BBCFFB',
        third: '#04004D',
        fourth: '#BBCFFB'
    }
}

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Lesson1 />
                <Lesson2 />
                <Switch>
                    <HomeTempate path="/" exact Component={Questions} />
                    <HomeTempate path="/confirm" exact Component={Comfirm} />
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
