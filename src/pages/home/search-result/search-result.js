import { Button, Table, Icon, Dialog, TableColumn, TableRow, TableCell, Label} from '@ui5/webcomponents-react';
import { useSelector } from "react-redux";
import "@ui5/webcomponents-icons/dist/flag";



export function SearchResult () {
    const { countries, loading, pristine, searchBy } = useSelector(rootReducer => rootReducer.countriesReducer);
    
    const openFlag = (contryName, flagSrc) => {
        const dialog = document.getElementById("modal-flag");
        const flag = document.getElementById("flag");
        
        dialog.setAttribute('header-text', contryName);
        flag.setAttribute('src', flagSrc)

        setTimeout(() => {
            dialog.show(); 
        }, 200);
    }

    const closeModal = () => {
        const dialog = document.getElementById("modal-flag");
        dialog.close();
    }

    return (
        <div>
            <Dialog id="modal-flag" header-text="Flag" draggable="true">
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
                    <Table columns={
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
                            <TableRow>
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
                                    <Button icon="flag"  onClick={() => openFlag(country.name, country.flags.png)}> Open Flag </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </Table>
                </div>
            ) : ''}

            {!loading && !pristine && !countries.length && (
                <ui5-message-strip design="Warning" class="mt-3 text-center" hide-close-button="true">
                    No country found by: <strong>{searchBy}</strong>
                </ui5-message-strip>
            )}

            
        </div>
    )
}