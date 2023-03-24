import {compile} from "handlebars";
import FormContainer from "../../components/FormContainer";
import InputField from "../../components/input-fields/InputField";
import Button from "../../components/Button";
import Link from "../../components/Link";
import './styles.pcss'
import CenterContainerLayout from "../../layouts/CenterContainer";


const FormContent = () => {
    const emailField = InputField({name: "email", label: "Email", linearLabel: false});
    const loginField = InputField({name: "login", label: "Login", linearLabel: false});
    const firstNameField = InputField({name: "first_name", label: "First name", linearLabel: false});
    const lastNameField = InputField({name: "second_name", label: "Last name", linearLabel: false});
    const phoneNumberField = InputField({name: "phone", label: "Phone number", type: 'tel', linearLabel: false});
    const passwordField = InputField({name: "password", label: "Password", type: 'password', linearLabel: false});
    const passwordAgainField = InputField({name: "password_again", label: "Password (Again)", type: 'password', linearLabel: false});

    const submitButton = Button({text: 'Sign up'});
    const loginLink = Link({text: 'Log in', href: '/login'});

    return compile(
        `
           <form class="sign-up-form-content">
                <div class="sign-up-form-content__input-area">
                    {{{emailField}}}
                    {{{loginField}}}
                    {{{firstNameField}}}
                    {{{lastNameField}}}
                    {{{phoneNumberField}}}
                    {{{passwordField}}}
                    {{{passwordAgainField}}}
                </div>
                <div class="sign-up-form-content__submit-area">
                    {{{submitButton}}}
                    {{{loginLink}}}
                </div>
           </form>
        `
    )({
        emailField, loginField, firstNameField, lastNameField, phoneNumberField, passwordAgainField, passwordField,
        submitButton, loginLink,
    })
}

const SignUp = () => {
    const formContainer = FormContent();
    const signupForm = FormContainer({formContainer, w: '600px', h: '840px', displayBorder: true})
    return CenterContainerLayout({content: signupForm})
}

export default SignUp;
