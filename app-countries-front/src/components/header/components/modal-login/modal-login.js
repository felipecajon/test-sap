import { Button, Dialog, Grid, Input, Icon} from '@ui5/webcomponents-react';
import { useRef } from 'react';
import _ from 'lodash';
import "@ui5/webcomponents-icons/dist/locked";
import "@ui5/webcomponents-icons/dist/email";
import "./modal-login.scss";
import { useDispatch } from 'react-redux';
import { getLogin } from '../../../../store/login/login-slice';

export const ModalLogin = props => {
    const _useDispatch = useDispatch();

    const dialogRef = useRef('modal-login');

    const closeModal = () => {
        dialogRef.current.close();
    };

    const handlerMovieFormSubmit = event => {
        event.preventDefault();
        const $user = document.getElementById("user");
        const $pw = document.getElementById("pw");
        let isOk = true;

        $user.setAttribute("value-state", '');
        $pw.setAttribute("value-state", '');

        if (_.isEmpty($user.value)) {
            $user.setAttribute("value-state", 'Error');
            isOk = isOk && false;
        }

        if (_.isEmpty($pw.value)) {
            $pw.setAttribute("value-state", 'Error');
            isOk = isOk && false;
        }

        if (!isOk) {
            return
        }

        _useDispatch(getLogin({user: $user.value, pw: $pw.value}));
    };

    return (
        <div>
            <Dialog id={props.uid} ref={dialogRef} headerText="Dialog Header">
                <form className="mt-3" onSubmit={handlerMovieFormSubmit} noValidate>
                    <Grid>
                        <div data-layout-span="XL12 L12 M12 S12">
                            <Input type="Email" icon={<Icon name="email" />} className="w-100" id="user" placeholder="Email..." name="user">
                                <div slot="valueStateMessage">Required Field</div>
                            </Input>
                        </div>

                        <div data-layout-span="XL12 L12 M12 S12">
                            <Input type="Password" icon={<Icon name="locked" />} className="w-100" id="pw" placeholder="Password..." name="pw">
                                <div slot="valueStateMessage">Required Field</div>
                            </Input>
                        </div>
                    </Grid>
                </form>

                <div slot="footer"	className="dialog-footer mt-2 w-100">
                    <div className='footerModal'>
                        <Button id="closeDialogButton" design="Default" onClick={closeModal}>Close</Button>
                        <Button id="submitLogin" design="Emphasized" onClick={handlerMovieFormSubmit}>Submit</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}