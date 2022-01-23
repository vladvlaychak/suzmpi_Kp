<template>
	<main>
	<div class="center">
		<input type="text"  class="ol fam" v-model="fam" name="fam" textarea placeholder="Фамилия" onfocus="placeholder='';" onblur="placeholder='Фамилия';">
		<input type="text" class="ol name " v-model="name" name="name" textarea placeholder="Имя" onfocus="placeholder='';" onblur="placeholder='Имя';">
		<input type="text" class="ol sername" v-model="sername" name="sername" textarea placeholder="Отчество" onfocus="placeholder='';" onblur="placeholder='Отчество';">
		<input type="number" class="ol phone" v-model="phone" name="phone" textarea placeholder="Номер телефона" onfocus="placeholder='';" onblur="placeholder='Номер телефона';">
		<input type="text" class="ol mail" v-model="email" name="email" textarea placeholder="e-mail" onfocus="placeholder='';" onblur="placeholder='e-mail';">
		<input type="text" class="ol login" v-model="login" name="login" textarea placeholder="Логин" onfocus="placeholder='';" onblur="placeholder='Логин';">
		<input type="password" class="ol v" v-model="password" name="password" textarea placeholder="Пароль" onfocus="placeholder='';" onblur="placeholder='Пароль';">
		<input type="password" class="ol r" v-model="confirmPassword" name="confirmPassword" textarea placeholder="Повторите Пароль" onfocus="placeholder='';" onblur="placeholder='Повторите Пароль';">
		
		<li class="olie">Нажимая кнопку “Регистрация” Я принимаю <a href="https://ozex.ru/o-magazine/usloviya-obsluzhivaniya/">Условия обслуживания</a> и <a href="https://tilda.cc/ru/privacy-generator/">Политику конфиденциальности</a></li>

		<button class="vxod vxo" type="button" id ="Registr" @click="registration()">Регистрация</button>
		<button class="reg re" type="button" @click="vhod()">Вход</button>
	</div>
	</main>
</template>
<style lang="scss">

.olie{  position: relative;
  width: 500%;
  height: auto;
  left:-100%;
  border-radius: 20px;
  font-family: Times New Roman;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 37px;
  color: #000000;
  top: 729px;
  list-style-type: none;}

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
	background-image: url("../assets/layouts/images/reg.jpg");
	margin: 20px 0;
	padding: 10px;
	position: absolute;
	width: 100%;
	height: 109%;
	left: 0px;
	top: 28px;
	background-attachment: fixed;
	background-repeat: repeat-y;
	background-size:100%;
	}
	.container {
    display: block;
    user-select: none;
	
	color: rgba(0, 0, 0, 0.7);
}
	.ol{
	position: absolute;
	width: 397px;
	height: 61px;	
	position: absolute;
	font-family: Rasa;
	font-style: normal;
	font-weight: normal;
	font-size: 32px;
	line-height: 39px;
	color: rgba(0, 0, 0, 0.7);
	background: rgba(224, 230, 160, 0.5);
	border: 2px solid #000000;
	box-sizing: border-box;
	text-align: center;
	}
	.fam{top: 0px;}
	.name{top: 100px;}
	.sername{top: 200px;}
	.phone{top: 300px;}
	.mail{top: 400px;}
	.login{top: 500px;}
	.v{top:600px;}
	.r{top:700px;}
	.pas{top:800px;}
	.vxo{top:810px;}
	.re{top:910px;}
	.center {
	margin: 0 auto;
	width: 300px;
	padding: 20px;
	color: rgb(248, 241, 241);
	}

	.Login{
	position: absolute;
	width: 330px;
	height: 78px;
	top: 111px;
	background: rgba(228, 231, 195, 0.5);
	border: 4px solid rgba(0, 0, 0, 0.5);
	box-sizing: border-box;
	text-align: center;		
	font-family: Viga;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 48px;
	text-align: center;

	color: rgba(0, 0, 0, 0.808);
	}
	.Pass{
	position: absolute;
	width: 330px;
	height: 78px;
	background: rgba(228, 231, 195, 0.5);
	border: 4px solid rgba(0, 0, 0, 0.5);
	box-sizing: border-box;
	text-align: center;	
	font-family: Viga;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 48px;
	text-align: center;

	color: rgba(0, 0, 0, 0.795);
	}
	.vxod{
	position: absolute;
	width: 330px;
	height: 92px;
	background: rgba(153, 139, 62, 0.8);
	font-family: Rasa;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 58px;
	border-radius: 20px;

	color: #FFFFFF;
	}
	.reg
	{
	position: absolute;
	width: 260px;
	height: 51px;
	border-radius: 20px;

	background: #998B3E;

	font-family: Rasa;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 29px;

	color: #FFFFFF;
	}
	

body {
    background: rgb(255, 255, 255);
    font-family: Open Sans, sans-serif;
}
p, label {
    color: #fff;
    font-size: 16pt;
}

</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      valid: false,
		fam:"",
		name:"",
		sername:"",
		phone:"",
		email:"",
		login:"",
		password:"",
		confirmPassword:"",
    };
  },
  methods: {
	vhod(){
		this.$router.push('/Login')
	},
    async registration() {
		if (this.password == this.confirmPassword){

        try {
          await axios.post("http://localhost:5000/", {
            method: "createUser",
            arguments: {
				fam:this.fam,
				name: this.name,
				sername:this.sername,
				phone:this.phone,
				email:this.email,
				login:this.login,
				password:this.password,
				confirmPassword:this.confirmPassword,
            },
          });
			this.$router.push("/Login");
        } catch (err) {
			alert("Введите данные")
          this.name = "";
          this.email = "";
          this.password = "";
          console.log(err);
        }
		}
		else{alert("Неправильный пароль")}
      }
    },
  };
</script>