<template>
    <div> d
        <img 
            :src="images[Math.abs(currentNumber) % images.length]" 
            v-on:mouseover="stopRotation"
            v-on:mouseout="startRotation"
            :slides-per-view="4"
            height="180px"
            width="180px"
            />
    </div>
</template>
<script>
export default {
    props: {
        images : {
            type: Array,
            required: true
        }
    },
    computed: {
        currentImage: function() {
        return this.images[Math.abs(this.currentNumber) % this.images.length];
        }
        },
    data() {
        return {
            currentNumber : 0,
            timer : null,
        }
    },
    mounted() {
            this.startRotation();
    },
    methods: {
        startRotation: function() {
            this.timer = setInterval(this.next, 3000);
            },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
            },
    },
}
</script>
<style scoped>

</style>