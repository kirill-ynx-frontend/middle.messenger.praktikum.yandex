import {compile} from "handlebars";
import "./styles.pcss"


const Divider = () => {
    return compile('<div class="divider"></div>')()
}

export default Divider;
