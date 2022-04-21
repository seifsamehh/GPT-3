import {Blog, Features, Footer, Header, Possibility, Gpt} from './containers'
import {Cta, Brand, Nav} from './components'
import './App.css'

function App() {
  return (
    <main className='App'>
      <div>
        <Nav />
        <Header />
      </div>
      <Brand />
      <Gpt />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
