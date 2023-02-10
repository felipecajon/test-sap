import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import "@ui5/webcomponents-icons/dist/flag";
import "@ui5/webcomponents/dist/MessageStrip";
import "@ui5/webcomponents/dist/BusyIndicator.js";
import "@ui5/webcomponents/dist/Dialog";

import { useSelector } from "react-redux";

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

    return (
        <div>

            <ui5-dialog id="modal-flag" header-text="Flag" value-state="Success">
                <img id="flag" />
            </ui5-dialog>


            <div className={`text-center mt-5 ${loading ? '' : 'd-none'}`}>
                <ui5-busy-indicator active size="Medium"></ui5-busy-indicator>
            </div>

            {!loading && countries && countries.length ? (
                <div className="search-result mt-4">
                    <ui5-table class="demo-table" id="table">
                        <ui5-table-column slot="columns">
                            <span>Country</span>
                        </ui5-table-column>
        
                        <ui5-table-column slot="columns" min-width="800">
                            <span>Capital</span>
                        </ui5-table-column>
        
                        <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin class="table-header-text-alignment">
                            <span>Region</span>
                        </ui5-table-column>
        
                        <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin class="table-header-text-alignment">
                            <span>Subregion</span>
                        </ui5-table-column>
        
                        <ui5-table-column slot="columns" max-width="100" popin-text="Weight" demand-popin class="table-header-text-alignment">
                            
                        </ui5-table-column>
        
                        {countries && countries.map((country, index) => (
                            <ui5-table-row key={index}>
                                <ui5-table-cell>{country.name}</ui5-table-cell>
                                <ui5-table-cell>{country.capital}</ui5-table-cell>
                                <ui5-table-cell>{country.region}</ui5-table-cell>
                                <ui5-table-cell>{country.subregion}</ui5-table-cell>
                                <ui5-table-cell>
                                    <ui5-button icon="flag" onClick={() => openFlag(country.name, country.flags.png)}> Open Flag </ui5-button>
                                </ui5-table-cell>
                            </ui5-table-row>
                        ))}
                    </ui5-table>
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