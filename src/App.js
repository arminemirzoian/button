import './App.css';
import ButtonReact from "./components/Button";

function App() {

    return (
        <div className="App">
            <ButtonReact
                type="button"
                boxSize="btn--box--large"
                buttonStyle="btn--green--outlined"
                buttonSize="btn--large"
                disabled={false}
            >BUTTON</ButtonReact>
        </div>
    );
}

export default App;