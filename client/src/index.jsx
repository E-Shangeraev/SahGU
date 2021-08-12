import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { YMInitializer } from 'react-yandex-metrika'
import TagManager from 'react-gtm-module'
import store from './redux/store'
import './assets/scss/style.scss'
import App from './App'

const tagManagerArgs = {
  gtmId: 'GTM-THK6HCV',
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <YMInitializer
        accounts={[82554970]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        }}
      />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
