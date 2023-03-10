import {compile} from "handlebars";
import "./styles.pcss"
import ProfileAvatar from "../../components/Avatar";


const ProfileLayout = ({form, linkArea= ""}={}) => {
    const avatar = ProfileAvatar()

    return compile(
        `
            <main class="profile-content">
                <div class="profile-content__inner">
                    <div class="profile-content__avatar-area">
                        {{{avatar}}}
                    </div>
                        {{{form}}}
                        {{{linkArea}}}                
                </div>
           </main>           
        `
    )({
        avatar,
        form,
        linkArea,
    })
}

export default ProfileLayout;