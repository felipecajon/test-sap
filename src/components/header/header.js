import React, { Component } from "react";
import "./header.scss"
import logoSAP from '../../assets/medias/img/logo-sap.png';
import { IconNTTData } from "../icons/logoNTTData/logo-nttdata";

export class Header extends Component {
    render () {
        return (
            <header className="header">
                <div className="container header-container">
                    <img src={logoSAP} alt="" className="logo-sap"/>

                    <IconNTTData color="#070f26" size="140"></IconNTTData>
                </div>
            </header>
        )
    }
}