<template>
	<main>
	<div>
		<div class="form-check">
		<input class="form-check-input button" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
		<label class="form-check-label button" for="flexRadioDefault1">
			Оплата Онлайн
		</label>
		<input type="text"  class="oli typ center" id = "typ" v-model="typ" textarea placeholder="Тип карты" onfocus="placeholder='';" onblur="placeholder='Тип карты';">
		<input type="text" class="oli number center " id = "number" v-model="number" textarea placeholder="Номер карты" onfocus="placeholder='';" onblur="placeholder='Номер карты';">
		<input type="text" class="oli Cvv center" id = "Cvv" v-model="Cvv" textarea placeholder="CVV-код" onfocus="placeholder='';" onblur="placeholder='CVV-код';">
		<input type="text" class="oli phone center" id = "phone" v-model="phone" textarea placeholder="Номер телефона" onfocus="placeholder='';" onblur="placeholder='Номер телефона';">
		</div>
		<div class="form-check">
		<input class="form-check-input button" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
		<label class="form-check-label button" for="flexRadioDefault2">
			Оплата при получении
		</label>
		<div class="class-other button">
			<li>Выбрав данный способ оплаты вы должны оплатить товар на месте получения или если его вам доставил курьер вы должны отдать деньги курьеру при этом попросив его предоставитьвам чек в обязательном порядке</li>
			</div>
		</div>
		<a href="#"><button class="ol re center" type="button" @click="TypPay()">Оплатить</button></a>
	</div>
	</main>
</template>
<style lang="scss">
	
	body {
	background: #ebc3a5;
	}
	input::placeholder {
	font-family: Viga;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 48px;
	text-align: center;

	color: rgba(0, 0, 0, 0.6);}

	main {
	background-image: url("../assets/layouts/images/FonWater.jpg");
	margin: 20px 0;
	padding: 10px;
	position: absolute;
	width: 100%;
	height: 95%;
	left: 0px;
	top: 28px;
	background-attachment: fixed;
	background-repeat: repeat-y;
	background-size:100%;
	}
	.center {
	margin: 0 auto;
	width: 300px;
	padding: 20px;
	color: rgb(248, 241, 241);
	}

	.oli{
	position: absolute;
	width: 293px;
	height: 66px;
	left: 500px;
	top: 103px;

	background: rgba(247, 236, 236, 0.6);
	border: 2px solid #000000;
	box-sizing: border-box;
	border-radius: 20px; 
	font-family: Times New Roman;
	font-style: normal;
	font-weight: normal;
	font-size: 32px;
	line-height: 37px;
	/* identical to box height */


	color: #000000;

	text-align: center;
	}
	.ol{
	position: absolute;
	width: 397px;
	height: 61px;
	font-family: Rasa;
	font-style: normal;
	font-weight: normal;
	font-size: 32px;
	line-height: 39px;
	border-radius: 20px; 
	color: rgba(0, 0, 0, 0.7);
	background: rgba(224, 230, 160, 0.5);
	border: 2px solid #000000;
	box-sizing: border-box;
	text-align: center;
	margin: 0 auto;
	width: 300px;
	padding: 20px;
	}
	.typ{top: 0px;}
	.number{top: 100px;}
	.Cvv{top: 200px;}
	.phone{top: 300px;}
	.re{top:460px;}
	.button{
	font-family: Times New Roman;
	font-style: normal;
	font-weight: normal;
	font-size: 32px;
	line-height: 37px;
	color: #000000;
	left: 35px;
	}
	#typ, 
	#number,
	#Cvv,
	#phone,
	.class-other{
	display: none;
	}

	#flexRadioDefault1:checked ~ #typ,
	#flexRadioDefault1:checked ~ #number,
	#flexRadioDefault1:checked ~ #Cvv,
	#flexRadioDefault1:checked ~ #phone,
	#flexRadioDefault2:checked ~ .class-other{
		display: block;
	}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      selectedProv: null,
      listProv: [],
      valid: false,
      streat:"",
      houze:"",
      flat:""
      
    }
  },
  created: function () {
    this.getProvList();	

  },
  
  methods: {
    // Получить список Областей
    getProvList: function () {
	
	
	},
    // Получить список городов в выбранной области
    async TypPay() {
        try {
          await axios.post("http://localhost:5000/", {
            method: "oplata",
            arguments: {
            typ:this.typ,
            number: this.number,
            Cvv:this.Cvv,
			phone:this.phone
            },
          });
			// alert("Заказ успешно оформлен");
			// this.$router.push("/KatalogTovarov");
        } catch (err) {
			alert("Заполните все поля")
          console.log(err);
        }
      }
    }
  }
</script>