import {compile} from "handlebars";
import InputField from "../../components/input-fields/InputField";
import Button from "../../components/Button";
import Link from "../../components/Link";
import "./styles.pcss"
import Divider from "../../components/Divider";
import ProfileLayout from "../../layouts/ProfileLayout";

const ProfileForm = () => {
    const changeMode = false;

    const emailField = InputField({name: "email", label: "Email", defaultValue: 'foo@bk.ru', changeMode});
    const loginField = InputField({name: "login", label: "Login", defaultValue: 'foofoo', changeMode});
    const firstNameField = InputField({name: "first_name", label: "First name", defaultValue: 'foo', changeMode});
    const lastNameField = InputField({name: "second_name", label: "Last name", defaultValue: 'fooevich', changeMode});
    const nickNameField = InputField({name: "display_name", label: "Nickname", defaultValue: 'foo123', changeMode});
    const phoneNumberField = InputField({
        name: 'phone',
        label: "Phone number",
        type: 'tel',
        defaultValue: '+1 (234) 567-89-10',
        changeMode
    });

    const submitButton = Button({text: 'Change', w: '30%'});

    const changePasswordLink = Link({text: 'Change password', href: '/change-password'});
    const exitLink = Link({text: 'Exit', href: '/chats', classes: "custom-link custom-link_color_red"});

    const divider = Divider();

    return compile(
        `
            <form class="profile-form-content__profile-form">
                <div class="profile-form-content__profile-form__input-area">
                    {{{emailField}}}
                    {{{divider}}}
                    {{{loginField}}}
                    {{{divider}}}
                    {{{firstNameField}}}
                    {{{divider}}}
                    {{{lastNameField}}}
                    {{{divider}}}
                    {{{nickNameField}}}
                    {{{divider}}}
                    {{{phoneNumberField}}}
                </div>
                <div class="profile-form-content__profile-form__submit-area">
                    {{{submitButton}}}
                </div>
           </form>          
        `
    )({
        emailField, loginField, firstNameField, lastNameField, nickNameField, phoneNumberField,
        submitButton,
        changePasswordLink, exitLink,
        divider,
    })
}

const ProfileLinkArea = () => {
    const changePasswordLink = Link({text: 'Change password', href: '/change-password'});
    const exitLink = Link({text: 'Exit', href: '/chats', classes: "custom-link custom-link_color_red"});

    return compile(
        `
             <div class="profile-form-content__link-area">
                {{{changePasswordLink}}}
                {{{exitLink}}}
            </div>    
        `
    )({
        changePasswordLink, exitLink,
    })
}


const Profile = () => {
    const form = ProfileForm();
    const linkArea = ProfileLinkArea();
    return ProfileLayout({form, linkArea});
}

export default Profile;
