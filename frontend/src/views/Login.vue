
<template >
	<main>
	<div class="center">
		<form >
			<input type="text" class="Login" v-model="user.email" name="Login" textarea placeholder="Логин" onfocus="placeholder='';" onblur="placeholder='Логин';">
			<input type="password" class="Pass" v-model="user.password" name="Pass" textarea placeholder="Пароль" onfocus="placeholder='';" onblur="placeholder='Пароль';">
			<div id="example-2"><button class="vxod" type="button" @click="submit()">Вход</button></div>
			<button class="reg" type="button" @click="reg()" >Регистрация</button>
			<button class="req" type="button" action="/" method="post">Забыли пароль?</button>
		</form>
	</div>
	
	</main>

</template>

<style lang="scss">
	*{text-decoration: none;}
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
	background-image: url("../assets/layouts/images/aut.jpg");
	margin: 20px 0;
	padding: 10px;
	position: absolute;
	width: 100%;
	height: 109%;
	left: 0px;
	top: 28px;
	background-attachment: fixed;
	background-repeat: repeat-x;
	}

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
	border-radius: 20px;
	color: rgba(0, 0, 0, 0.808);
	}
	.Pass{
	position: absolute;
	width: 330px;
	height: 78px;
	top: 217px;
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
	border-radius: 20px;
	color: rgba(0, 0, 0, 0.795);
	}
	.vxod:hover {
	width: 335px;
	height: 98px;
	}
	.vxod{
	border-radius: 20px;
	position: absolute;
	width: 330px;
	height: 92px;
	top: 320px;
	background: rgba(153, 139, 62, 0.8);
	font-family: Rasa;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 58px;

	color: #FFFFFF;
	}
	.reg:hover {
	width: 270px;
	height: 60px;
	}
	.reg
	{
	border-radius: 20px;
	position: absolute;
	width: 260px;
	height: 51px;
	top: 420px;
	background: #998B3E;
	font-family: Rasa;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 29px;

	color: #FFFFFF;
	}
	.req:hover {
	width: 205px;
	height: 40px;
	}
	.req
	{
	border-radius: 20px;
	position: absolute;
	width: 199px;
	height: 35px;
	top: 480px;

	background: rgba(153, 139, 62, 0.3);

	font-family: Rasa;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;

	color: #FFFFFF;
	}
</style>

<script>
export default {
  data() {
    return {
      options: {
        shouldStayLoggedIn: false,
        valid: false,
      },
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
	reg(){
		this.$router.push('/Register')
	},
    submit() {
		if((this.user.email == "admin") & (this.user.password == "admin")){
			this.$router.push('/Buscket')
		}
		else{
        const user = {
          email: this.user.email,
          password: this.user.password,
        };
		this.$store.dispatch('LoginUser',user)
        .then(() =>{
			this.$router.push('/KatalogTovarov')
        })
        .catch(()=>{
          this.login = '';
          this.password = '';
        })
      }
	}
    },
};
</script>
