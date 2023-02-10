import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import "@ui5/webcomponents-icons/dist/flag";
import { useSelector } from "react-redux";

export function SearchResult () {
    const { countries } = useSelector(rootReducer => rootReducer.countriesReducer);

    return (
        <div>
            {countries && countries.length ? (
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
                                    <ui5-button icon="flag"> Open Flag </ui5-button>
                                </ui5-table-cell>
                            </ui5-table-row>
                        ))}
                    </ui5-table>
                </div>
            ) : ''}
        </div>
    )
}