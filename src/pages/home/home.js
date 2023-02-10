import React, {Component} from "react";
import { SearchForm } from "./search-form/search-form";
import { SearchResult } from "./search-result/search-result";

export class Home extends Component {
    render () {
        return (
            <div className="home container mt-5">
                <SearchForm></SearchForm>
                <SearchResult></SearchResult>
            </div>
        )
    }
}