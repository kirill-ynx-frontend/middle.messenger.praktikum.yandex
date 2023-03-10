import {compile} from 'handlebars';
import './styles.pcss'
import * as cn from "classnames";

const FormContainer = ({formContainer, w = '500px', h = '500px', displayBorder = false} = {}) => {
    const containerClass = cn('container', {'container-border': displayBorder});

    return compile(
        `
        <div class="container-outer">
            <div 
                class="{{containerClass}}"
                style="width: {{w}}; height: {{h}}"
            >
                {{{formContainer}}}
            </div>
        </div>
        `
    )({formContainer, w, h, containerClass})
}

export default FormContainer
