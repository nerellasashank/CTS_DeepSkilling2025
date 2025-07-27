import logo from './logo.svg';
import './App.css';
import CalculateScore from './Components/CalculateScore'

function App() {
  return (
    <div className="App">
      <CalculateScore Name={"LIKHITH MANNEPALLI"}
      School={"K L Deemed to be University"}
      total={284}
      goal={3}
      />
    </div>
  );
}

export default App;
