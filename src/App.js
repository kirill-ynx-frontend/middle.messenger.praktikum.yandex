import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Page404 from "./pages/Page404";
import Page500 from "./pages/Page500";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/PasswordChange";

const App = () => {
    switch (window.location.pathname) {
        case '/login':
            return Login()
        case '/sign-up':
            return SignUp()
        case '/not-found':
            return Page404()
        case '/error':
            return Page500()
        case '/profile':
            return Profile()
        case '/change-password':
            return ChangePassword()
        default:
            return Chat();
    }
}

export default App;