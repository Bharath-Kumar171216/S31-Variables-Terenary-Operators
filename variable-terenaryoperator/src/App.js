// import logo from './logo.svg';
import "./App.css";
import MarkSheet from "./components/MarkSheet";
function App() {
  return (
    <div className="App">
      <MarkSheet
        engMarks="80"
        matMarks="76"
        socMarks="90"
        sciMarks="52"
        telMarks="90"
        hinMarks="96"
        MarkSheet="Bharath Mark Sheet"
        pass="pass"
      ></MarkSheet>
      <MarkSheet
        engMarks="88"
        matMarks="82"
        socMarks="65"
        sciMarks="80"
        telMarks="85"
        hinMarks="75"
        MarkSheet="Durga Mark Sheet"
        pass="pass"
      ></MarkSheet>
      <MarkSheet
        engMarks="70"
        matMarks="80"
        socMarks="40"
        sciMarks="80"
        telMarks="32"
        hinMarks="90"
        MarkSheet="Chandu Mark Sheet"
        pass="fail"
      ></MarkSheet>
      <MarkSheet
        engMarks="75"
        matMarks="89"
        socMarks="54"
        sciMarks="90"
        telMarks="86"
        hinMarks="67"
        MarkSheet="Hasan Mark Sheet"
        pass="pass"
      ></MarkSheet>
      <MarkSheet
        engMarks="80"
        matMarks="60"
        socMarks="70"
        sciMarks="30"
        telMarks="70"
        hinMarks="54"
        MarkSheet="Kumar Mark Sheet"
        pass="fail"
      ></MarkSheet>

    </div>
  );
}

export default App;
