import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import { Button, Select, Option, Dialog} from '@ui5/webcomponents-react';
import { useRef } from 'react';

export const ModalSelectTheme = props => {
    const dialogRef = useRef('theme-modal');
    setTheme('sap_horizon');

    const handlerChangeTheme = e => {
        setTheme(e.target.selectedOption.value);
    }
    
    const closeModal = () => {
        dialogRef.current.close();
    };

    return (
        <div>
            <Dialog id={props.uid} ref={dialogRef} headerText="Dialog Header">
                <Select onChange={handlerChangeTheme} className="w-100">
                    <Option value="sap_horizon">SAP Horizon</Option>
                    <Option value="sap_horizon_dark">SAP Horizon dark</Option>
                    <Option value="sap_horizon_hcb">SAP Horizon hcb</Option>
                    <Option value="sap_horizon_hcw">SAP Horizon hcw</Option>
                    <Option value="sap_fiori_3">SAP Fiori 3</Option>
                    <Option value="sap_fiori_3_dark">SAP Fiori 3 dark</Option>
                    <Option value="sap_fiori_3_hcb">SAP Fiori 3 hcb</Option>
                    <Option value="sap_fiori_3_hcw">SAP Fiori 3 hcw</Option>
                    <Option value="sap_belize">SAP Belize</Option>
                    <Option value="sap_belize_hcb">SAP Belize hcb</Option>
                    <Option value="sap_belize_hcw">SAP Belize hcw</Option>
                </Select>

                <div slot="footer"	className="dialog-footer mt-2">
                    <Button id="closeDialogButton" design="Emphasized" onClick={closeModal}>Close</Button>
                </div>
            </Dialog>
        </div>
    )
}