
import './App.css'
import FrontPage from './components/FrontPage'
import DateCountDown from './components/dateCountDown'
import OutStory from './components/OutStory'
import Gallery from './components/Gallery'
import EventVenue from './components/EventVenue'
import DressCode from './components/DressCode'
import WeddingEntourage from './components/WeddingEntourage'
import Aos from 'aos'

function App() {

  return (
    <div className='container container-lg'>
      <FrontPage/>
      <DateCountDown/>
      <OutStory/>
      <EventVenue/>
      <Gallery/>
      <DressCode />
      <WeddingEntourage />
   </div>
  )
}

export default App
