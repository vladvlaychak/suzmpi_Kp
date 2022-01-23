<template>
	<main>
	<div>
		<div class="form-check">
		<input class="form-check-input button" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
		<label class="form-check-label button" for="flexRadioDefault1">
			Доставка - 400 р
		</label>
		<input type="text"  class="oli fam" id = "streat" v-model="streat" textarea placeholder="Улица" onfocus="placeholder='';" onblur="placeholder='Улица';">
		<input type="text" class="oli name " id = "houze" v-model="houze" textarea placeholder="Дом" onfocus="placeholder='';" onblur="placeholder='Дом';">
		<input type="text" class="oli sername" id = "flat" v-model="flat" textarea placeholder="Квартира" onfocus="placeholder='';" onblur="placeholder='Квартира';">
		</div>
		<div class="form-check">
		<input class="form-check-input button" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
		<label class="form-check-label button" for="flexRadioDefault2">
			Самовывоз
		</label>
		<div class="class-other button">
			<li>г.Симферополь</li>
			<li>ул.Беспалова</li>
			<li>Дом 64</li>
			</div>
		</div>
		<a href="#"><button class="ol re center" type="button" @click="Typtrans()">Продолжить</button></a>
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

	.oli{
	position: absolute;
	width: 293px;
	height: 66px;
	left: 153px;
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
	.fam{left: 300px;top: 0px;}
	.name{left: 680px;top: 0px;}
	.sername{left: 1000px;top: 0px;}
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
	#streat, 
	#houze,
	#flat,
	.class-other{
	display: none;
	}

	#flexRadioDefault1:checked ~ #streat,
	#flexRadioDefault1:checked ~ #houze,
	#flexRadioDefault1:checked ~ #flat,
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
    async Typtrans() {
        try {
          await axios.post("http://localhost:5000/", {
            method: "TypPay",
            arguments: {
            streat:this.streat,
            houze: this.houze,
            flat:this.flat,
            },
          });
			this.$router.push("/TypPay");
        } catch (err) {
			alert("Заполните все поля")
          console.log(err);
        }
      }
    }
  }
</script>