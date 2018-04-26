import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import FrontImages from './FrontImages.js'
import FrontUsers from './FrontUsers'


export default () => (
    <BrowserRouter>
        <Route path="/images" Component={FrontImages} />
        <Route path="/users" Component={FrontUsers} />
    </BrowserRouter>
)

// use axios to route information to the backend