import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
return (
  <>
    <Navbar title="CrudApp" navele1="Home" navele2="About" />
    <TextForm heading="Enter Text To Analyze Below"/>
  </>
);
}

export default App;