import './App.css'
import Header from './components/Header';  

function App() {
  const data = 'Nameer Nihad '
  return (
    <div>
      <Header data={data} />
      <p style={{backgroundColor:'yellow'}} >My name is {data} </p>
    
    </div>
);
} 

export default App;


