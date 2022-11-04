import './App.css';
import Header from './components/header/Header';

function App() {
  let user = "John Doe";
  let userage = 40;
  let footballPlayers = ["Ronaldo", "Mbappe", "Genrih", "Messi", "ewjfbjbw", "ewfwe", "Akbar"];
  return (
    <div>
      <Header players={footballPlayers} username={user} akbar={userage}/>
    </div>
  );
}

export default App;
