import axios from "axios";
import "./App.css";

function App() {
    const sendPing = async () => {
        try {
            const { data } = await axios.get("0.0.0.0:8080/api/ping");
            console.log("data: ", data);
        } catch (error) {
            console.log("error: ", error);
        }
    };
    return (
        <div className="App">
            <button onClick={sendPing}>핑 날리기</button>
        </div>
    );
}

export default App;
