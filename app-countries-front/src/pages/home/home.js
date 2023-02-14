import { BusyIndicator, Grid } from "@ui5/webcomponents-react";
import { useSelector } from "react-redux";
import { FormLogin } from "../../components/form-login/form-login";
import { SearchForm } from "./search-form/search-form";
import { SearchResult } from "./search-result/search-result";

export const Home = () => {
    const { isLogged, loading } = useSelector(rootReducer => rootReducer.loginReducer);

    return (
        <div className="home container mt-5">
            {!loading && isLogged && (
                <>
                    <SearchForm></SearchForm>
                    <SearchResult></SearchResult>
                </>
            )}

            {!loading && !isLogged && (
                <Grid position="Center">
                    <div data-layout-span="XL4 L4 M12 S12" data-layout-indent="XL4 L4 M0 S0">
                        <FormLogin></FormLogin>
                    </div>
                </Grid>
            )}

             <div className={`text-center mt-5 ${loading ? '' : 'd-none'}`}>
                <BusyIndicator active size="Medium"></BusyIndicator>
            </div>
        </div>
    )
}