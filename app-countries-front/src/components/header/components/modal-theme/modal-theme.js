import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import { Button, Select, Option, Dialog} from '@ui5/webcomponents-react';
import { useRef } from 'react';

export const ModalSelectTheme = props => {
    const dialogRef = useRef('theme-modal');
    setTheme('sap_horizon');

    const themes = [
        {code: 'sap_horizon', value: 'SAP Horizon'},
        {code: 'sap_horizon_dark', value: 'SAP Horizon dark'},
        {code: 'sap_horizon_hcb', value: 'SAP Horizon hcb'},
        {code: 'sap_horizon_hcw', value: 'SAP Horizon hcw'},
        {code: 'sap_fiori_3', value: 'SAP Fiori 3'},
        {code: 'sap_fiori_3_dark', value: 'SAP Fiori 3 dark'},
        {code: 'sap_fiori_3_hcb', value: 'SAP Fiori 3 hcb'},
        {code: 'sap_fiori_3_hcw', value: 'SAP Fiori 3 hcw'},
        {code: 'sap_belize', value: 'SAP Belize'},
        {code: 'sap_belize_hcb', value: 'SAP Belize hcb'},
        {code: 'sap_belize_hcw', value: 'SAP Belize hcw'}
    ];

    const handlerChangeTheme = e => {
        setTheme(e.target.selectedOption.value);
    }
    
    const closeModal = () => {
        dialogRef.current.close();
    };

    setTimeout(() => {
        const $dialogTheme = document.getElementById(props.uid);
        $dialogTheme.setAttribute('class', '');
    }, 500);

    return (
        <div>
            <Dialog id={props.uid} ref={dialogRef} headerText="Choose a Theme" className='d-none'>
                <Select onChange={handlerChangeTheme} className="w-100">
                    {(themes.map(theme => (
                        <Option key={theme.code} value={theme.code}>{theme.value}</Option>
                    )))}
                </Select>

                <div slot="footer"	className="dialog-footer mt-2">
                    <Button id="closeDialogButton" design="Emphasized" onClick={closeModal}>Close</Button>
                </div>
            </Dialog>
        </div>
    )
}