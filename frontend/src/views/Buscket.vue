<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav offset-sm-9">
          <li class="nav-item">
            <button  type="button" id ="KatalogTovarov" @click="KatalogTovarov()" >Каталог товаров</button>
          </li>
          <li class="nav-item offset-sm-10">
            <button  type="button" id ="KatalogTovarov" @click="KatalogTovarov()" >{{this.$store.getters.user.Login}}</button>
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
        <v-card class="mx-auto" max-width="160px" height="100%">
          <v-img :src="item.ImageTovara"></v-img>
          <v-card-title primaty-title>
            <div>  
              <p>{{ item.ImageTovara }}</p>
              <p>{{ item.id_tovara }}</p>
              <p>{{ item.AllCountTovar }}</p>

            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <button class="korzina" type="button" @click="oformlenie()">Оформить</button>
  <li class="ol">В Корзине {{this.array.length}} товаров на стоимость {{xi.sumary}} рублей</li>
  </div>
</template>
<style>
.ol{  position: relative;
  width: 800px;
  height: auto;
  left:0%;
  background: #eef8f1;
  border-radius: 20px;
  font-family: Times New Roman;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  color: #000000;
  top: -80px;
  list-style-type: none;}
.korzina{
  position: relative;
  width: 388px;
  height: 89px;
  left: 945px;
  top: 87%;
  background: #00FF38;
  border-radius: 20px;
  font-family: Times New Roman;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  color: #FFFFFF;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      array: [],
      xi:[],
      x:0,
      author:''
    };
  },
  created() {
    this.korzina()
  },
methods: {
    oformlenie(){this.$router.push('/OformlenieZakaza')},
    KatalogTovarov(){this.$router.push('/KatalogTovarov')},
    async korzina() {
      try {
          const response = await axios.post("http://localhost:5000/", {
            method: "korzina",
            arguments: {
              author: this.$store.getters.user.id
            },
          });
          this.array = response.data;
          const respons = await axios.post("http://localhost:5000/", {
            method: "korzinaCount",
            arguments: {
              author: this.$store.getters.user.id
            },
          });
          this.xi = respons.data[0];
          // this.x = respons.data[0]
        } catch (err) {
          console.log(err);
        }
    }
}}
</script>