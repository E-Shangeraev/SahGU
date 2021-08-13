import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Footer from '@components/Footer/Footer'
import Main from '@pages/Main'
import TwoDiplomas from '@pages/TwoDiplomas'
import Contacts from '@pages/Contacts'
import Bachelor from '@pages/Bachelor'
import Magistracy from '@pages/Magistracy'
import Comission from '@pages/Comission'
import News from '@pages/News'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/two-diplomas" exact component={TwoDiplomas} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/bachelor" exact component={Bachelor} />
          <Route path="/magistracy" exact component={Magistracy} />
          <Route path="/comission" exact component={Comission} />
          <Route path="/news/:id" exact component={News} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
