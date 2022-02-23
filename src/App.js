import './App.css';
import ButtonReact from "./components/Button";

function App() {

    return (
        <div className="App">
            <ButtonReact
                type="button"
                boxSize="btn--box--middle"
                buttonStyle="btn--primary--solid"
                buttonSize="btn--middle"
                onClick={onclick}
                disabled={false}
            >BUTTON</ButtonReact>
        </div>
    );
}

export default App;
