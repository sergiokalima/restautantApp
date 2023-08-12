import { Route, Routes} from 'react-router-dom'
import { HomePage} from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { Contact } from './pages/Contact'

export const MainPage = () => {
  return (
    <>

    <Routes>
      <Route path='/' element= {<HomePage />} />
      <Route path='about' element = {<AboutPage/>} />
      <Route path='contact' element = {<Contact/>} />
    </Routes>
      </>
  )
}