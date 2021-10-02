<template>
    <div>
        <section class="cover">
	<div class="container-login">
		<p class="text-center" style="font-size: 80px;">
			<i class="zmdi zmdi-account-circle"></i>
		</p>
		<p class="text-center text-condensedLight">Inicia sesión con tu cuenta</p>
		<form>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="email" id="email">
				<label class="mdl-textfield__label" for="email">Email</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="password" id="pass">
				<label class="mdl-textfield__label" for="pass">Contraseña</label>
			</div>
			<button id="SingIn" class="mdl-button mdl-js-button mdl-js-ripple-effect" style="color: #3F51B5; float:right;">
				Iniciar sesión <i class="zmdi zmdi-mail-send" ></i>
			</button>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<p><a href="/registeruser">Registrar cuenta</a></p>
			</div>
		</form>
	</div>
        </section>
    </div>
</template>