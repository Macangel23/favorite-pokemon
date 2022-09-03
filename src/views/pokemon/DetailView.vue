<template>
    <div>
        <ul>
            <li>
                <img :src="pokemonDetails.sprites.front_default" alt="">
            </li>
            <li>Abilities:
                <ul v-for="ability in pokemonDetails.abilities" :key="ability">
                    <li>{{ability.ability.name}}</li>
                </ul>
            </li>
            <li>Name: {{ pokemonDetails.name }}</li>
            <li>Weight: {{ pokemonDetails.weight }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        pokemonDetails: {
            type: [Array,Object],
            default: () => {
                return {
                    data: []
                }
            }
        }
    }
}
</script>
<style lang="">
    
</style>