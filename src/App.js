import Header from './components/Header'
import Tabs from './components/Tabs'

function App() {
  const author = 'Caleb Roy'
  const client = 'Jalal Alkhatib'
  const company = 'Bites & Pipes'

  return (
    <div className='container'>
      <Header />
      <Tabs />
    </div>
  );
}

export default App;
