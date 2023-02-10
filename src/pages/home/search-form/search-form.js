import "@ui5/webcomponents/dist/Input"
// import "@ui5/webcomponents/dist/Button"
// import "@ui5/webcomponents/dist/SuggestionItem"
import "@ui5/webcomponents/dist/features/InputSuggestions"
import "@ui5/webcomponents-icons/dist/search";
import _ from 'lodash';
import { useState } from "react";
import { getCountriesByLanguage } from "../../../services/language-services";
import { useDispatch } from "react-redux";
import { getCountries } from "../../../store/countries/countries-slice";


export function SearchForm () {
    const [searchBy, setSearchBy] = useState('');
    const _useDispatch = useDispatch();
    
    const handlerChange = event => {
        const { value } = event.target;
        setSearchBy(value)
        
    }

    const search = async () => {
        const $input = document.getElementById("searchInput");
        $input.setAttribute("value-state", '');

        if (_.isEmpty(searchBy)) {
            $input.setAttribute("value-state", 'Error')
            return;
        }

        // const countries = await getCountriesByLanguage(searchBy);
        _useDispatch(getCountries(searchBy));
    }

    return (
        <div className="search-container">
            <h1 className="h2 text-center">Language Finder</h1>

            <p className="text-center">
                Search by language...
            </p>

            <div className="row">
                <div className="col-9">
                    <ui5-input class="w-100" id="searchInput" placeholder="Enter search criteria ..." onInput={handlerChange} >
                        {/* <div slot="valueStateMessage">This is an error message. Extra long text used as an error message.</div> */}

                        <ui5-icon id="search" slot="icon" name="search"></ui5-icon>
                    </ui5-input>
                </div>

                <div className="col-3">
                    <ui5-button design="Emphasized" onClick={search}>Subscribe</ui5-button>
                </div>
            </div>
        </div>
    )
}