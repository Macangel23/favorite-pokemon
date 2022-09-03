import axios from 'axios';

const state = () => ({
    pokemons: [],
    pokemonDetails: {}
})

const mutations = {
    SET_POKEMONS(state,payload) {
        state.pokemons = payload
    },
    SET_POKEMON_DETAILS(state,payload) {
        state.pokemonDetails = payload
    }
}

const actions = {
    async getAllPokemons({commit}) {
        await axios.get('https://pokeapi.co/api/v2/pokemon')
            .then((response) => {
                commit("SET_POKEMONS",response.data.results);
            }).catch(error => console.log(error.response))
    },
    async getDetails({commit},link) {
        await axios.get(link)
            .then((response) => {
                console.log(response.data);
                commit("SET_POKEMON_DETAILS",response.data);
            }).catch(error => console.log(error.response))
    }
}

const getters = {
    allPokemons: (state) => state.pokemons,
    pokemonDetails: (state) => state.pokemonDetails,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}