import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Joke from './Components/Joke';
import JokesData from './Components/JokesData';
import Data from './Components/Data';

function App() {
  // const elem = JokesData.map(joke => {
  //   return <Joke setup={joke.setup} punchline={joke.punchline}/>
  // })
  const cards= Data.map(item => {
    return(
      <Card 
            key={item.id}
            image={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
      />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      {/* <Hero/> */}
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
