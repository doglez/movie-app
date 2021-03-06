import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './assets/css/styles.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Series from './components/Series/Series'
import Movies from './components/Movies/Movies'
import Latest from './components/Latest/Latest'
import MyList from './components/MyList/MyList'

const App = ()=> {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' exact><Home/></Route>
                <Route path='/browse/genre/83'><Series/></Route>
                <Route path='/browse/genre/34399'><Movies/></Route>
                <Route path='/latest'><Latest/></Route>
                <Route path='/browse/my-list'><MyList/></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
