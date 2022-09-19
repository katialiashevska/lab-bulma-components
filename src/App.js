import './App.css';
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar/Navbar";
import FormField from "./components/FormField/FormField";
import CoolButton from "./components/CoolButton/CoolButton";
import SignupForm from "./components/SignupForm/SignupForm";
import Message from "./components/Message/Message";

function App() {
  return (
    <div className="App">
      <Navbar input1="Home" input2="Login" input3="Signup" />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton className="button is-small is-danger is-rounded" btn1="Button 1" />
      <br />
      <CoolButton className="button is-small is-success" btn1="Button 2" />
      <SignupForm />
      <Message 
        title="Hello World"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi." />
    </div>
  );
}

export default App;
