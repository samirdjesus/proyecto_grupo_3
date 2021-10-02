<template>
    <div>
        <section class="cover">
	<div class="container-register-user">
		<p class="text-center text-condensedLight">Registrate</p>
		<form>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="text" id="storename">
				<label class="mdl-textfield__label" for="storename">Nombre de la tienda</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="text" id="names">
				<label class="mdl-textfield__label" for="names">Nombres</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="text" id="lastnames">
				<label class="mdl-textfield__label" for="lastnames">Apellidos</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="email" id="email">
				<label class="mdl-textfield__label" for="email">Email</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="text" id="phone">
				<label class="mdl-textfield__label" for="phone">Teléfono</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="password" id="pass">
				<label class="mdl-textfield__label" for="pass">Contraseña</label>
			</div>
			<button id="Register" class="mdl-button mdl-js-button mdl-js-ripple-effect" style="color: #3F51B5; float:right;">
				Registrar <i class="zmdi zmdi-mail-send"></i>
			</button>
		</form>
	</div>
        </section>
    </div>
</template>