import {compile} from 'handlebars';
import './styles.pcss'

const Button = ({text, w = '100%', h = '100%'} = {}) => {
    return compile(
        `
           <input 
                class="button"
                type="button"
                value="{{text}}"
                style="width: {{w}}; height: {{h}}"
           />
        `
    )({text, w, h})
}

export default Button;
