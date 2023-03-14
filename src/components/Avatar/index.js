import {compile} from "handlebars";
import "./styles.pcss"


const ProfileAvatar = () => {
    return compile(`<img alt="avatar" src="" class="avatar">`)()
}

export default ProfileAvatar;
