import './App.css';
import ButtonReact from "./components/Button";
import {toLarge, toGrey} from "./assets/icons";

function App() {

    return (
        <div className="App">
            <ButtonReact
                type="button"
                boxSize="btn--box--large"
                buttonStyle="btn--secondary--solid"
                buttonSize="btn--large"
                disabled={false}
                icon={toLarge()} // can be toLarge(), toGrey(), ""
            >BUTTON</ButtonReact>
        </div>
    );
}

export default App;