<template>
    <section id="slider">
            <div id="left-slider-div">
                <div>
                    <h1 data-aos="fade-right" data-aos-once="true">Centar NIT</h1>
                    <h3 data-aos="fade-left" data-aos-once="true"><strong>Mesto za razvoj inovacija</strong></h3>
                    <div class="left-slider-button-div">
                        <router-link :to="{name: 'home', hash: '#about'}"><the-button  data-aos="fade-up" data-aos-delay="800" class="button" text="O nama" width="140" height="40"></the-button></router-link>
                        <router-link to="/kontakt"><the-button color="#E35445" data-aos="fade-up" data-aos-delay="900" class="button" text="Kontakt" width="140" height="40"></the-button></router-link>
                    </div>
                </div>
            </div>
        
                <div id="right-slider-div" data-aos="zoom-in-left" data-aos-delay="1200"> 
                
                        <img src="../../assets/hero-img2.png" alt="">
                        
                </div>
            
    </section>
</template>
<script>
import TheButton from '../base/TheButton.vue'
export default {
    components: { TheButton },
    data() {
        return {
            
            show: false,
            
        }
    }, 
}
</script>
<style scoped>

#slider {
    min-height: 600px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5% 60px 2% 100px;
    overflow-x: hidden;
    margin-top: 100px;
    
}

#left-slider-div {
    width: 30%;
}

#left-slider-div h1 {
    font-size: 1.6rem;
    font-weight: 400;
    text-align: left;
    
}    

#left-slider-div h3 {
    font-size: 3rem;
    line-height: normal;
    text-shadow: 3px 3px 6px rgb(14 10 65 / 25%);
    margin: 10px 0 35px 0;
    font-weight: 300;
    display: block;
    width: 400px;
    text-align: left;
    
} 


#right-slider-div img {
    width: 80%;
    height: auto;
    
}

.left-slider-button-div {
    display: flex;
    justify-content: space-between;
    margin: 0 100px 0 0;
   
}

@keyframes imageLoad {
    from { transform: scale(0); opacity: 0;}
    to { transform: scale(1); opacity: 1;}
}
@media only screen and (max-width: 1160px) {
    #right-slider-div img {
         height: 300px;
     }
}

@media only screen and (max-width: 767px) {
    #slider {
    text-align: center;
    flex-direction: column;
    min-height: 700px;
    margin-top: 20%;
}
    #left-slider-div h1 {
        font-size: 50px;
    }
     #right-slider-div img {
         height: 200px;
     }
}

@media only screen and (max-width: 480px) {
    
    
}

</style>