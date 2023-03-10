import {compile} from "handlebars";


const Chat = () => {
    return compile(
        `
            <a href="/login">Login page</a>
            <br/>
            <a href="/sign-up">Sign up page</a>
            <br/>
            <a href="/not-found">Not found page</a>
            <br/>
            <a href="/error">Error page</a>
            <br/>
            <a href="/profile">Profile page</a>
            <br/>
            <a href="/change-password">Change password page</a>
            <br/>
        `
    )()
}

export default Chat;