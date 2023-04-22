import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const LazyMoviesList = lazy(() => import('./components/Movies'))
const LazyCharactersList = lazy(() => import('./components/Characters'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
      <Routes>
        <Route path='/' element={<LazyMoviesList />} />
        <Route path='/characters' element={<LazyCharactersList />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  </Provider>
)
