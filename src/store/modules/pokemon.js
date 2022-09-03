import axios from 'axios';

const state = () => ({
    pokemons: [],
})

const mutations = {
    SET_POKEMONS(state,payload) {
        state.pokemons = payload
    }
}

const actions = {
    getAllPokemons() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then((response) => {
                console.log(response)
            }).catch(error => console.log(error.response))
    }
}

const getters = {
    allPokemons: (state) => state.pokemons
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}