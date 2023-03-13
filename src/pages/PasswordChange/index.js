import {compile} from "handlebars";
import InputField from "../../components/input-fields/InputField";
import Button from "../../components/Button";
import ProfileAvatar from "../../components/Avatar";
import Divider from "../../components/Divider";
import "./styles.pcss"
import ProfileLayout from "../../layouts/ProfileLayout";


const ChangePasswordForm = () => {
    const oldPasswordField = InputField({label: "Old password", type: 'password', linearLabelEven: true});
    const newPasswordField = InputField({label: "New Password", type: 'password', linearLabelEven: true});
    const newPasswordAgainField = InputField({label: "New Password (Again)", type: 'password', linearLabelEven: true});

    const submitButton = Button({text: 'Save', w: '70%', h: '50px'});

    const divider = Divider()
    const avatar = ProfileAvatar()

    return compile(
        `
            <form class="change-password-form-content__form">
                <div class="change-password-form-content__form__input-area">
                    {{{oldPasswordField}}}
                    {{{divider}}}
                    {{{newPasswordField}}}
                    {{{divider}}}
                    {{{newPasswordAgainField}}}
                </div>
                <div class="change-password-form-content__form__submit-area">
                    {{{submitButton}}}
                </div>
           </form>          
        `
    )({
        oldPasswordField, newPasswordField, newPasswordAgainField,
        submitButton,
        avatar,
        divider,
    })
}

const ChangePassword = () => {
    const form = ChangePasswordForm();
    return ProfileLayout({form});
}

export default ChangePassword;