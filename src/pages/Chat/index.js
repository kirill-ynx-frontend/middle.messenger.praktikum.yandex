import {compile} from "handlebars";


const Chat = () => {
    return compile(
        `
            <nav>
                  <ul>
                    <li><a href="/login">Login page</a></li>
                    <li><a href="/sign-up">Sign up page</a></li>
                    <li><a href="/not-found">Not found page</a></li>
                    <li><a href="/error">Error page</a></li>
                    <li><a href="/profile">Profile page</a></li>
                    <li><a href="/change-password">Change password page</a></li>
                  </ul>
            </nav>
        `
    )()
}

export default Chat;
