<template>
  <div class="team-container" id="team" style="overflow: hidden">
    <div class="title">
      <div data-aos="zoom-in-up" data-aos-once="true">
        <h2><b style="margin-top:20px">Upoznajte naš tim</b></h2>
      </div>
    </div>
    <div class="container1 w3-row-padding w3-column-padding">
      <div class="cont" v-for="person in persons" v-bind:key="person">
        <div data-aos="zoom-in-up" data-aos-once="true">
          <cards
            :image="person.url1"
            :subtitle="person.functionWorkerDoes"
            :title="person.name"
            :phone="person.tel"
            :mail="person.email"
          ></cards>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import TheImage from "../base/TheImage.vue";
import Cards from "./Cards.vue";

export default {
  components: {
    Cards,
  },

  data() {
    return {
      persons: [
        {
          url1: require("../../assets/team-images/Plojovic_Semsudin.jpg"),
          name: "Prof. dr. Šemsudin Plojović",
          functionWorkerDoes: "Koordinator centra",
          tel: "+381 60 3907000",
          email: "s.plojovic@riscnovipazar.rs",
        },
        {
          url1: require("../../assets/team-images/dzemil_dupljak.jpg"),
          name: " Džemil Dupljak",
          functionWorkerDoes: "Product manager",
          tel: "+381 66 6322241",
          email: "dzemildupljak@hotmail.com",
        },
      ],
    };
  },
  mounted() {
    console.log("The team mounted");
  },
};
</script>
<style scoped>

.team-container {
  justify-content: center;
  padding: 20px;
  height: 100%;
  width: 100%;
  min-height: 500px;
  overflow-x: hidden;
}

h2 {
  margin: 15px 40%;
  color: #665a5a;
}

.container1 {
  padding: auto 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
}

.cont {
  padding: auto 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  margin: auto 15pt 10pt 15pt;
  float: left;
}

@media (max-width: 900px) {
  .cont {
    margin: 0pt;
    min-width: 500px;

  }
  cards {
    min-width: 180px;
    /* margin-bottom: 20px; */
  }
  h2 {
    width: 100%;
    margin: 50px 0%;
    text-align: center;
  }
}
</style>
