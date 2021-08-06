import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Main from '@pages/Main'
import TwoDiplomas from '@pages/TwoDiplomas'
import Contacts from '@pages/Contacts'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/two-diplomas" exact component={TwoDiplomas} />
          <Route path="/contacts" exact component={Contacts} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
