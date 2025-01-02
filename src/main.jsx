import { createRoot } from 'react-dom/client'
import App from '@src/App.jsx'
import i18n from './i18n/i18n'
import { I18nextProvider } from 'react-i18next'

createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
)