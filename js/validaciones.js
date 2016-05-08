$(document).ready(function(){
	$("#nombre").blur(validarNombre);
	$("#correo").blur(validarCorreo);
	$("#asunto").blur(validarAsunto);
	$("#mensaje").blur(validarMensaje);
});

function validarNombre(){
	$("#checkNombre").removeClass();
	$("#mensaje_nombre").html(" ");
	var nombre = $("#nombre").val();
	if(nombre.length == 0){
		$("#checkNombre").addClass( "fa fa-times" ).css({color: "red"});
		$("#mensaje_nombre").html("Campo nombre vacio").css({color: "red"});
	}else{
		$("#checkNombre").addClass( "fa fa-check" ).css({color: "green"});
	}
}

function validarCorreo(){ 
	$("#checkCorreo").removeClass();
	$("#mensaje_correo").html(" ");
	var correo = $("#correo").val();
	var patron = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	if(correo.length == 0){
		$("#checkCorreo").addClass( "fa fa-times" ).css({color: "red"});
		$("#mensaje_correo").html("Campo correo obligatorio").css({color:"red"});
		return false;
	}else if(patron.test(correo)){ 
		$("#checkCorreo").addClass( "fa fa-check" ).css({color: "green"});
		return true;
	}else{ 
		$("#checkCorreo").addClass( "fa fa-times" ).css({color: "red"});
		$("#mensaje_correo").html("Correo invalido").css({color:"red"});
	}
}

function validarAsunto(){
	$("#checkAsunto").removeClass();
	$("#mensaje_asunto").html(" ");
	var asunto = $("#asunto").val();
	if(asunto.length == 0){
		$("#checkAsunto").addClass( "fa fa-times" ).css({color: "red"});
		$("#mensaje_asunto").html("Campo asunto vacio").css({color: "red"});
	}else{
		$("#checkAsunto").addClass( "fa fa-check" ).css({color: "green"});
	}
}

function validarMensaje(){
	$("#checkMensaje").removeClass();
	$("#mensaje_mensaje").html(" ");
	var mensaje = $("#mensaje").val();
	if(mensaje.length == 0){
		$("#checkMensaje").addClass( "fa fa-times" ).css({color: "red"});
		$("#mensaje_mensaje").html("Campo mensaje vacio").css({color: "red"});
	}else{
		$("#checkMensaje").addClass( "fa fa-check" ).css({color: "green"});
	}
}