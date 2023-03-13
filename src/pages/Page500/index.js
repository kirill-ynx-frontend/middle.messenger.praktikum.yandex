import {compile} from "handlebars";
import CenterContainerLayout from "../../layouts/CenterContainer";
import Link from "../../components/Link";
import './styles.pcss'

const Page500 = () => {
    const chatsLink = Link({text: 'Back to chats', href: '/chats'});
    const content = compile(
        `
        <div class="error-code-content">
            <div class="error-code">500</div>
            <div>Ops, server error</div>
            {{{chatsLink}}}
        </div>
        `
    )({chatsLink})
    return CenterContainerLayout({content})
}

export default Page500;