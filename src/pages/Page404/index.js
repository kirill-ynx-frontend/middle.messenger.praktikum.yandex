import {compile} from "handlebars";
import Link from "../../components/Link";
import './styles.pcss'
import CenterContainerLayout from "../../layouts/CenterContainer";


const Page404 = () => {
    const chatsLink = Link({text: 'Back to chats', href: '/chats'});
    const content = compile(
        `
        <div class="not-found-code-content">
            <div class="not-found-code">404</div>
            <div>Page not found</div>
            {{{chatsLink}}}
        </div>
        `
    )({chatsLink})
    return CenterContainerLayout({content})
}

export default Page404;