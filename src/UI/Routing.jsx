import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home.jsx';
import Staff from './Pages/Staff/Staff.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';

import ClassWork from './Pages/ClassWork/ClassWork.jsx';
import Homework from './Pages/ClassWork/Homework/Homework.jsx';
import SwapList from './Pages/ClassWork/Swapper/SwapList.jsx';

const Routing = () => {
    return (
        <RoutingStyled className='Routing'>
            <Routes>
                <Route element={ <Home /> }         path=''  />
                <Route element={ <Staff /> }        path='staff'  />
                <Route element={ <Contact /> }      path='contact'  />
                <Route element={ <Login /> }        path='login'  />

                <Route element={ <ClassWork /> }    path='class'>
                    <Route element={ <Homework /> }   path=''  />
                    <Route element={ <SwapList /> }   path='swapper'  />
                </Route>
            </Routes>
        </RoutingStyled>
    );
}

export default Routing;

const RoutingStyled = styled.div`

`;