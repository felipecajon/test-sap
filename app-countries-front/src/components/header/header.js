import "./header.scss"
import logoSAP from '../../assets/medias/img/logo-sap.png';
import { IconNTTData } from "../icons/logoNTTData/logo-nttdata";
import { ModalSelectTheme } from "./components/modal-theme/modal-theme";
import { Button } from '@ui5/webcomponents-react';
// import "@ui5/webcomponents-icons/dist/customize";
import "@ui5/webcomponents-icons/dist/account";
import { ModalLogin } from "./components/modal-login/modal-login";

export const Header = () => {
    const uidSelectThemeModal = "modal-select-theme";
    const uidLoginModal = "modal-login";

    const openModalSelectTheme = () => {
        const dialog = document.getElementById(uidSelectThemeModal);
        dialog.show(); 
    }

    const openModalLogin = () => {
        const dialog = document.getElementById(uidLoginModal);
        dialog.show(); 
    }

    return (
        <header className="header">
            <div className="container header-container">
                <img src={logoSAP} alt="" className="logo-sap"/>

                {/* <Button icon="customize" design="Emphasized" onClick={openModalSelectTheme}>Change Theme</Button> */}
                <Button icon="account" design="Emphasized" onClick={openModalLogin}>Login</Button>

                <IconNTTData color="#070f26" size="140"></IconNTTData>
            </div>

            {/* <ModalSelectTheme uid={uidSelectThemeModal}></ModalSelectTheme> */}
            <ModalLogin uid={uidLoginModal}></ModalLogin>
        </header>
    )
}