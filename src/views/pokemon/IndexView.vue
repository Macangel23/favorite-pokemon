<template>
    <div>
        <b-button @click="translate($root.$i18n.locale == 'en' ? 'tag' : 'en')">Transalate</b-button>
        <h1>{{ $t('greet.message') }} Pokemons</h1>
        <b-container>
            <b-row>
                <b-col>
                    <b-table 
                        small 
                        :fields="fields" 
                        :items="pokemonList" 
                        responsive="sm" 
                        :per-page="perPage"
                        :current-page="currentPage"
                    >
                        <template #cell(url)="data">
                            <b-button @click="details(data.value)">{{ $t('details') }}</b-button>
                        </template>
                    </b-table>
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="my-table"
                        align="right"
                    ></b-pagination>
                </b-col>
                <b-col>
                    <PokemonDetails v-if="showDetails" :pokemonDetails="pokemonDetails"/>
                </b-col>
            </b-row>
        </b-container>
        
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import PokemonDetails from './DetailView.vue';
export default {
    components: {
        PokemonDetails
    },
    data() {
        return {
            fields: [
                'name',
                { key: 'url', label: "Details" }
            ],
            currentPage: 1,
            perPage: 5,
            showDetails: false,
        }
    },
    mounted() {
        this.getAllPokemons()
    },
    computed: {
        ...mapGetters({
            pokemonList: "pokemon/allPokemons",
            pokemonDetails: "pokemon/pokemonDetails"
        }),
        rows() {
            return this.pokemonList.length
        }
    },
    methods: {
        ...mapActions({
            getAllPokemons: 'pokemon/getAllPokemons',
            getDetails: 'pokemon/getDetails'
        }),
        details(link) {
            this.getDetails(link)
                .then(() => {
                    this.showDetails = true
                }).catch(error => console.log(error));
        },
        translate(lang) {
            this.$root.$i18n.locale = lang
        }
    },
} 
</script>
<style lang="">
    
</style>