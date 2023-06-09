<template>
    <div>
        <img :src="url1" v-bind:style="{'height': height+'%','width': width+'%'}">
    </div>
</template>
<script>
export default {
    props: {
        "url1" : {
            required: true,
            type: String,
        },
        "height" : {
            type: Number,
            default: 100,
        },
        "width" : {
            type: Number,
            default: 100,
        },
    },
}
</script>
<style scoped>
    img {
        margin: 14px 60px 0px 60px;
        border-radius: 100%;
    }
</style>