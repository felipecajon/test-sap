import { Button, Grid, Input, Icon, MessageView, MessageItem} from '@ui5/webcomponents-react';
import _ from 'lodash';
import "@ui5/webcomponents-icons/dist/locked";
import "@ui5/webcomponents-icons/dist/email";
import "./form-login.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../store/login/login-slice';

export const FormLogin = props => {
    const { pristine } = useSelector(rootReducer => rootReducer.loginReducer);
    const _useDispatch = useDispatch();

    const handlerMovieFormSubmit = event => {
        event.preventDefault();
        const $email = document.getElementById("email");
        const $pw = document.getElementById("pw");
        let isOk = true;

        $email.setAttribute("value-state", '');
        $pw.setAttribute("value-state", '');

        if (_.isEmpty($email.value)) {
            $email.setAttribute("value-state", 'Error');
            isOk = isOk && false;
        }

        if (_.isEmpty($pw.value)) {
            $pw.setAttribute("value-state", 'Error');
            isOk = isOk && false;
        }

        if (!isOk) {
            return
        }

        _useDispatch(getLogin({email: $email.value, pw: $pw.value}));
    };

    return (
        <div>
            <h2 className="text-center">Login</h2>
            <form className="mt-3" onSubmit={handlerMovieFormSubmit} noValidate>
                <Grid>
                    <div data-layout-span="XL12 L12 M12 S12">
                        <Input type="Email" icon={<Icon name="email" />} className="w-100" id="email" placeholder="Email..." name="email">
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
            
            <div className={`mt-2 ${!pristine ? '' : 'd-none'}`}>
                <MessageView showDetailsPageHeader>
                    <MessageItem groupName="Products" titleText="Invalid User or Password">
                    </MessageItem>
                </MessageView>
            </div>

            <div slot="footer"	className="dialog-footer mt-4 w-100">
                <Grid>
                    <div data-layout-span="XL6 L6 M12 S12" data-layout-indent="XL6 L6 M0 S0">
                        <Button id="submitLogin" design="Emphasized" className='w-100' onClick={handlerMovieFormSubmit}>Submit</Button>
                    </div>
                </Grid>
            </div>
        </div>
    )
}