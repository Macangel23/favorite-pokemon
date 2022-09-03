<template>
    <div>
        <ul>
            <li>
                <img :src="pokemonDetails.sprites.front_default" alt="">
            </li>
            <li>{{ $t('abilities') }}:
                <ul v-for="ability in pokemonDetails.abilities" :key="ability.name">
                    <li>{{ability.ability.name}}</li>
                </ul>
            </li>
            <li>{{ $t('name') }}: {{ pokemonDetails.name }}</li>
            <li>{{ $t('weight') }}: {{ pokemonDetails.weight }}</li>
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