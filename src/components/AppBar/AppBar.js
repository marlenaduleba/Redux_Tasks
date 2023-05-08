import { AuthNav } from "components/AuthNav/AuthNav.js";
import { Navigation } from "components/Navigation/Navigation.js";
import { UserMenu } from "components/UserMenu/UserMenu.js";
import css from './AppBar.module.css';


export const AppBar = () => {
  return <header className={css.header} >
    <Navigation/>
    <UserMenu/>
    <AuthNav/>
  </header>
};
