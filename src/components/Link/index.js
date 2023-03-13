import {compile} from 'handlebars';
import './styles.pcss'


const Link = ({text, href, classes} = {}) => {
    classes = classes ? classes : "custom-link custom-link_color_blue";
    return compile(
        `
           <a 
                class="{{classes}}"
                href={{href}}
            >
                {{text}}
           </a>
        `
    )({text, href, classes})
}

export default Link;
