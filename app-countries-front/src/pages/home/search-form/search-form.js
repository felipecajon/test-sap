import _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../../store/countries/countries-slice";
import { Grid, Button, Icon, Input } from '@ui5/webcomponents-react';
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

export function SearchForm (props) {
    const { user } = useSelector(rootReducer => rootReducer.loginReducer);
    const _useDispatch = useDispatch();

    const handlerMovieFormSubmit = event => {
        event.preventDefault();
        const $input = document.getElementById("searchInput");
        const searchBy = event.target.name.value;

        $input.setAttribute("value-state", '');

        if (_.isEmpty(searchBy)) {
            $input.setAttribute("value-state", 'Error');
            return;
        }

        _useDispatch(getCountries({lang: searchBy, user}));
    };

    return (
        <div className="search-container">
            <h1 className="h2 text-center text-color-default">Countries Finder</h1>

            <p className="text-center text-color-default">
                Search countries by language...
            </p>

            <form className="mt-3" onSubmit={handlerMovieFormSubmit} noValidate>
                <Grid>
                    <div data-layout-span="XL9 L9 M12 S12">
                        <Input icon={<Icon name="search" />} className="w-100" id="searchInput" placeholder="Enter search criteria (Ex.: pt, es, en) ..." name="name">
                            <div slot="valueStateMessage">Required Field</div>
                        </Input>
                    </div>

                    <div data-layout-span="XL3 L3 M12 S12">
                        <Button className='w-100' design="Emphasized" submits="true" >Search</Button>
                    </div>
                </Grid>
            </form>
        </div>
    )
}