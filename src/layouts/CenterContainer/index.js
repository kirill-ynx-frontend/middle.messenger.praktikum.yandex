import {compile} from "handlebars";
import "./styles.pcss"


const CenterContainerLayout = ({content} = {}) => {
    return compile(
        `
            <main class="center-container">
                {{{content}}}
            </main>           
        `
    )({
        content,
    })
}

export default CenterContainerLayout;