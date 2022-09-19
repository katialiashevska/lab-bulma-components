import "bulma/css/bulma.css";
import Navbar from "../Navbar/Navbar";
import FormField from "../FormField/FormField";
import CoolButton from "../CoolButton/CoolButton";

const SignupForm = () => {
    return (
        <div>
          <Navbar input1="Home" input2="Login" input3="Signup" />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="********" />
          <CoolButton className="button is-success" btn1="Submit" />
        </div>
    )
}

export default SignupForm;