<template>
    <div>
        
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    mounted() {
        this.getAllPokemons()
    },
    methods: {
        ...mapActions({
            getAllPokemons: 'pokemon/getAllPokemons'
        })
    },
} 
</script>
<style lang="">
    
</style>