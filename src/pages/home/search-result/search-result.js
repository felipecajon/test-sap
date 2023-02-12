import { Button, Table, Dialog, TableColumn, TableRow, TableCell, Label, MessageStrip} from '@ui5/webcomponents-react';
import { useSelector } from "react-redux";
import "@ui5/webcomponents-icons/dist/flag";
import { useRef } from 'react';

export function SearchResult () {
    const dialogFlagRef = useRef('flag-modal');
    const { countries, loading, pristine, searchBy } = useSelector(rootReducer => rootReducer.countriesReducer);
    
    const openFlag = (contryName, flagSrc) => {
        const dialog = document.getElementById("modal-flag");
        const flag = document.getElementById("flag");
        
        dialog.setAttribute('header-text', contryName);
        flag.setAttribute('src', flagSrc)

        setTimeout(() => {
            dialogFlagRef.current.show();
        }, 50);
    }

    const closeModal = () => {
        const dialog = document.getElementById("modal-flag");
        dialog.close();
    }

    return (
        <div>
            <Dialog id="modal-flag" ref={dialogFlagRef} header-text="Flag" draggable="true">
                <img id="flag" alt="" />

                <div slot="footer"	className="dialog-footer mt-2">
                    <Button id="closeDialogButton" design="Emphasized" onClick={closeModal}>Close</Button>
                </div>
            </Dialog>

            <div className={`text-center mt-5 ${loading ? '' : 'd-none'}`}>
                <ui5-busy-indicator active size="Medium"></ui5-busy-indicator>
            </div>

            {!loading && countries && countries.length ? (
                <div className="search-result mt-4">
                    <Table stickyColumnHeader="true" columns={
                        <>
                            <TableColumn style={{width: '12rem'}}>
                                <Label>Country</Label>
                            </TableColumn>
                            
                            <TableColumn minWidth={800} popinText="Supplier">
                                <Label>Capital</Label>
                            </TableColumn>
                            
                            <TableColumn demandPopin minWidth={600} popinText="Dimensions">
                                <Label>Region</Label>
                            </TableColumn>
                            
                            <TableColumn demandPopin minWidth={600} popinText="Weight">
                                <Label>Subregion</Label>
                            </TableColumn>
                            
                            <TableColumn></TableColumn>
                        </>
                        }>

                        {countries && countries.map((country, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Label>
                                        {country.name}
                                    </Label>
                                </TableCell>

                                <TableCell>
                                    <Label>
                                        {country.capital}
                                    </Label>
                                </TableCell>
                                
                                <TableCell>
                                    <Label>
                                        {country.region}
                                    </Label>
                                </TableCell>
                                
                                <TableCell>
                                    <Label>
                                        {country.subregion}
                                    </Label>
                                </TableCell>
                                
                                <TableCell>
                                    <Button icon="flag"  onClick={() => openFlag(country.name, country.flag)}> Open Flag </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </Table>
                </div>
            ) : ''}

            {!loading && !pristine && !countries.length && (
                <MessageStrip design="Warning" hide-close-button="true" className="mt-3 text-center">
                    No country found by: <strong>{searchBy}</strong>
                </MessageStrip>
            )}
        </div>
    )
}