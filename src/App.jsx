import './App.css';
import Calender from './components/Calender';

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 Days in Danang 🌥️</h1>
      <h2>Welcome to Danang, guest! Check out this calender to get to know the city and see all the sights during your stay.</h2>
      <Calender />
    </div>
  )
}

export default App