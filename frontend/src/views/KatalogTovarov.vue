
<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav offset-sm-9">
		<li class="nav-item ">
      <button  type="button" id ="Registr" @click="kor()" >Корзина {{this.xi.length}} </button>
		</li>
    <li class="nav-item offset-sm-10">
      <button  type="button" id ="KatalogTovarov" @click="kor()" >{{this.$store.getters.user.Login}}</button>
    </li>
		</ul>
	</div>
	</nav>
    <v-container grid-list-lg class="mt-5">
      <v-layout row>
        <v-flex xs12 sm12 md9 lg3
          v-for="(item,i) of array"
          :key="i"
        >
          <v-card class="mx-auto" max-width="160px" height="100%" >
            <v-img :src="item.ImageTovara"></v-img>
            <v-card-title primaty-title>
              <div>  
                <!-- <p>{{ i+1 }}</p> -->
                <p>{{ item.name }}</p>
                <p>{{ item.cena }}</p>

              </div>
              <div><button class="by1" type="button" id ="Registr" @click="Buy(), sizeKorz()" >Купить</button></div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      array: [],
      xi: [],
      author:''
    };
  },
  created() {
    this.getTovar()
    this.sizeKorz()
  },
  methods: {
  kor(){
		this.$router.push('/Buscket')
	},
    async sizeKorz(){
      try{
        const response = await axios.post("http://localhost:5000/", {
        method: "sizeKorz",
        arguments: {
          author: this.$store.getters.user.id
        },
      });
      this.xi = response.data;
      }
      catch (err) {
          console.log(err);
      }
    },
    async getTovar() {
      try {
          const response = await axios.post("http://localhost:5000/", {
            method: "GetTovar",
            arguments: {
              author: this.$store.getters.user.id
            },
          });
          this.array = response.data;
        } catch (err) {
          console.log(err);
        }
    },
    async Buy() {
      try {
          await axios.post("http://localhost:5000/", {
            method: "AddToKorzina",
            arguments: {
            id_tovara:this.$store.getters.user.id,
            Create_zakaz_idCreate_zakaz:"2",
            Tovar_idTovar:"1"
            },
            
          });
          alert(this.array)
        } catch (err) {
          console.log(err);
        }
    }
  }
};
</script>

<style scoped>
  .carousel-link{
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0,0,0,0.5);
    transform: translate(-50%,0);
    padding: 5px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .booktitle, .bookauthor{
    font-size: 12px;
    line-height: 100%;
    word-wrap: break-word;
  }
  .bookauthor{
    color: gray;
  }
  .by1{
    position: absolute;
    width: 168px;
    height: 43px;
    top: 240px;
    left: -3%;
    background: #FF0000;
    border-radius: 20px;
    font-family: Times New Roman;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    color: #000000;}
</style>