import './App.css';
import Header from './components/header/Header';

function App() {
  let user = "John Doe";
  let userage = 40;
  return (
    <div>
      <Header username={user} akbar={userage}/>
    </div>
  );
}

export default App;
