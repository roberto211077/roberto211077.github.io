	//Metodo Generación Formulario
	function GeneraForm(){
		////Crear el objeto formulario
		let formulario=document.createElement("form"); 
		
		let titulo=document.createElement("label"); 
		
		let cajaTextNombres=document.createElement("input"); 		
		
		let cajaTextEmail=document.createElement("input");		
		
		let cajaTextMensaje=document.createElement("textarea"); 
		
		let boton=document.createElement("input");
 
		////Asignar atributos al objeto formulario
        	formulario.setAttribute('method', "post");
        	formulario.setAttribute('action', "");
        	formulario.setAttribute('style', "width:300px;margin: 0px auto");
 
        	////Asignar atributos al objeto caja de texto de Nombres
        	cajaTextNombres.setAttribute('type', "text");
        	cajaTextNombres.setAttribute('placeholder', "Nombres");
        	cajaTextNombres.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");
			
        	
        	////Asignar atributos al objeto caja de texto de Email
        	cajaTextEmail.setAttribute('type', "text");
        	cajaTextEmail.setAttribute('placeholder', "Email");
        	cajaTextEmail.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");
			 
        	
        	////Asignar atributos al objeto area de texto de Mensaje
        	cajaTextMensaje.setAttribute('placeholder', "Mensaje");
        	cajaTextMensaje.setAttribute('style', "width:100%;height:200px;margin: 10px 0px;padding: 5px");
 
		////Asignar atributos al objeto boton
			boton.setAttribute('type', "button");
        	boton.setAttribute('value', "Enviar");
        	boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");
			boton.setAttribute('onclick', "alert('Se envio el mensaje')");
 
        	titulo.innerHTML='<h1>Contacto</h1>';
        	formulario.appendChild(titulo);
        	formulario.appendChild(cajaTextNombres);
        	formulario.appendChild(cajaTextEmail);
        	formulario.appendChild(cajaTextMensaje);
        	formulario.appendChild(boton);

        	document.getElementById('ContentFormulario').replaceChildren(formulario);			

            
	}
 
 
