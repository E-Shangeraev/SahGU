import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Main from '@pages/Main'
import TwoDiplomas from '@pages/TwoDiplomas'
import Contacts from '@pages/Contacts'
import Bachelor from '@pages/Bachelor'
import Magistracy from '@pages/Magistracy'
import Comission from '@pages/Comission'
import News from '@pages/News'

function App() {
  const { on } = useSelector(({ visuallyImpared }) => visuallyImpared)

  return (
    <div className={classNames('App', { 'visually-impared': on })}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/two-diplomas" exact component={TwoDiplomas} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/bachelor" exact component={Bachelor} />
          <Route path="/magistracy" exact component={Magistracy} />
          <Route path="/comission" exact component={Comission} />
          <Route path="/news/:id" exact component={News} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
