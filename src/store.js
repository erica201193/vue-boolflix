import Vue from "Vue";

export const state = Vue.observable({
    moviesList: [],
    seriesList: [],
});

export function searchMovies(searchText)