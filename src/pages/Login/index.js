import {compile} from "handlebars";
import FormContainer from "../../components/FormContainer";
import InputField from "../../components/input-fields/InputField";
import Button from "../../components/Button";
import Link from "../../components/Link";
import "./styles.pcss"
import CenterContainerLayout from "../../layouts/CenterContainer";

const FormContent = () => {
    const loginField = InputField({name: "login", label: "Login", linearLabel: false});
    const passwordField = InputField({name: "password", label: "Password", type: 'password', linearLabel: false});
    const submitButton = Button({text: 'Sign in'});
    const signupLink = Link({text: 'Sign up', href: '/sign-up'});

    return compile(
        `
           <form class="login-form-content">
                <div class="login-form-content__input-area">
                    {{{loginField}}}
                    {{{passwordField}}}
                </div>
                <div class="login-form-content__submit-area">
                    {{{submitButton}}}
                    {{{signupLink}}}
                </div>
           </form>
        `
    )({loginField, passwordField, submitButton, signupLink})
}

const Login = () => {
    const formContainer = FormContent();
    const loginForm = FormContainer({formContainer, h: '680px', displayBorder: true})
    return CenterContainerLayout({content: loginForm})
}

export default Login;
