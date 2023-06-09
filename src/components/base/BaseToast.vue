<template>
    <div id="toast" :class="[show ? 'show' : '', success ? 'success' : 'error']">
        <div class="icons">
            <i v-if="success" class="fas fa-check-circle"></i>
            <i v-if="error" class="fas fa-exclamation-triangle"></i>
        </div>
        <div class="text">
            <slot name="text"> <p> {{ text }} </p> </slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true
        },
        success: {
            type: Boolean,
            required: false
        },
        error: {
            type: Boolean,
            required: false
        },
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        
    },
}
</script>
<style> 

#toast {
    visibility: hidden;
    display: flex;
    min-width: 250px;
    margin-left: -125px;
    justify-content: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
}

#toast .icons {
    margin:0 10px;
}

#toast.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}


.success {
    color: #4F8A10;
    background-color: #DFF2BF;
}

.error {
   color: #D8000C;
   background-color: #FFD2D2;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
    
</style>