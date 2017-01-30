/*
HOW TO USE
$(document).ready(function()
{
	var $a = jQuery.noConflict()
	$a('header').raqfaelmln_acessibilidade(
	{
	    'color' : '#fff',
	    'background' : 'rgba(0,0,0,0.1)',
		'item_menuprincipal' : true,
		'item_busca' : true,
		'item_conteudocentral' : true,
		'item_altocontraste' : true,
		'item_acessibilidade' : true,
		'elemento_menuprincipal' : '#menu-primario ul>li>a',
		'elemento_busca' : '.busca input[name=frase]',
		'elemento_conteudocentral' : 'section>.center',
		'estilo_altocontraste' : 'https://www.univates.br/media/acessibilidade/contraste.css'
	});
});


Atalhos
Teclando-se Alt + 1 em qualquer página, chega-se diretamente ao menu principal do site.
Teclando-se Alt + 2 em qualquer página, chega-se diretamente ao campo de busca interna.
Teclando-se Alt + 3 em qualquer página, chega-se diretamente ao conteúdo central.
Teclando-se Alt + 4 em qualquer página, chega-se diretamente ao mapa do site.
Teclando-se Alt + A em qualquer página, o site será colocado em modo Alto Contraste.
Teclando-se Alt + I em qualquer página, o site será direcionado para a página Acessibilidade.*/

//$.noConflict();
(function($)
{
	$.fn.rafaelmln_acessibilidade = function(opcoes) 
	{
		return this.each (function(i,v)
		{
			/*CSS*/
			var css = '<style type="text/css">';
			css += '#menu_acessibilidade { float:left; width:100%; height: 27px; background: '+opcoes.background+';}';
            css += '#menu_acessibilidade ul{ list-style: none; float:right;}';
			css += '#menu_acessibilidade li { float: left; margin-left: 20px; margin-top: 3px; }';
			css += '#menu_acessibilidade li a { color: '+opcoes.color+'; font-size: 11px; letter-spacing: 0.3px; }';
			css += '#menu_acessibilidade li a#item_fale_conosco { border-left: 1px solid rgba(0,0,0,0.3); border-right: 1px solid rgba(0,0,0,0.3); margin-left: 0px; padding: 5px 10px; }';			
			css += '#menu_acessibilidade li a#item_ingles { border-right: 1px solid rgba(0,0,0,0.3); margin-left: -10px; padding: 5px 10px 5px 0px; font-size: 13px; }';
			//css += '#menu_acessibilidade li a:focus { border: 1px solid #fff !important;}';
			css += '#menu_acessibilidade li a img { width:12px; height:12px; margin-top: 3px; }';
			css += '</style>';
			$(this).append(css);

			/*HTML*/
			var campos = '<div id="menu_acessibilidade"><div class="center clearfix container-fluid"><ul>';			
			if(opcoes.item_menuprincipal)
			{
				campos += '<li><a href="" id="item_menuprincipal" title="Ir para o menu principal">Menu Principal</a></li>';
			}
			if(opcoes.item_busca)
			{
				campos += '<li><a href="" id="item_busca" title="Ir para a busca">Busca</a></li>';
			}
			if(opcoes.item_conteudocentral)
			{
				campos += '<li><a href="" id="item_conteudocentral" title="Ir para o conte&uacute;do central">Conte&uacute;do Central</a></li>';
			}
			if(opcoes.item_altocontraste)
			{
				campos += '<li><a href="#" id="item_altocontraste" title="Ativar/desativar a alto contraste no site">Alto Contraste</a></li>';
			}

			campos += '</ul></div></div>';
			$(this).prepend(campos);

			/*JS*/
			if(opcoes.item_menuprincipal)
			{
				function rafaelmln_menuprincipal()
				{
					$( opcoes.elemento_menuprincipal ).first().focus(); 
					console.log('4');
				}
				$('#item_menuprincipal').click(function(e)
				{
					e.preventDefault(); 
					rafaelmln_menuprincipal();
				});
			}
			if(opcoes.item_busca)
			{
				function rafaelmln_busca()
				{
					$(window).scrollTop(0);
					$( opcoes.elemento_busca ).focus();
				}
				$('#item_busca').click(function(e)
				{
					e.preventDefault(); 
					rafaelmln_busca();
				});
			}
			if(opcoes.item_conteudocentral)
			{
				function rafaelmln_conteudocentral()
				{
					var p = $( opcoes.elemento_conteudocentral ).position(); 
					$(window).scrollTop(p.top); 
				}
				$('#item_conteudocentral').click(function(e)
				{
					e.preventDefault(); 
					rafaelmln_conteudocentral()
				});
			}
			if(opcoes.item_altocontraste)
			{
				function alto_contraste(ativar)
				{
					if (ativar)
					{
						$('head').append('<link id="style-alto-contraste" rel="stylesheet" type="text/css" href="'+opcoes.estilo_altocontraste+'" />'); 
						localStorage.setItem('alto_contraste_ativo', 't');
					} 
					else 
					{
						$('#style-alto-contraste').remove(); 
						localStorage.setItem('alto_contraste_ativo', 'f');
					}
				}
				alto_contraste( (localStorage.alto_contraste_ativo && localStorage.alto_contraste_ativo == 't') );

				$('#item_altocontraste').click(function(e)
				{
					e.preventDefault();
					alto_contraste( !(localStorage.alto_contraste_ativo && localStorage.alto_contraste_ativo == 't') );
				});
			}

            var li = $('#menu_acessibilidade li')[0];
            $(li).find('a').focus();            


			/*Comandos*/
			document.onkeydown = KeyDown;
			document.onkeyup = KeyUp;
			var alt_ativo = false;
			var shift_ativo = false;
			var ctrl_ativo = false;
			function KeyDown(e)
			{
			   	var KeyID = (window.event) ? event.keyCode : e.keyCode;
			   	//chrome
			   	if(alt_ativo)
			   	{
			   		if(opcoes.item_menuprincipal && KeyID == 49)
					{
				      	rafaelmln_menuprincipal();
				    }
				    else if(opcoes.item_busca && KeyID == 50)
				    {
				     	rafaelmln_busca();
				    }
				    else if(opcoes.item_conteudocentral && KeyID == 51)
				    {
				      	rafaelmln_conteudocentral();
				    }
				    else if(KeyID == 65)
					{				    	
				      	alto_contraste( !(localStorage.alto_contraste_ativo && localStorage.alto_contraste_ativo == 't') );
				    }
			   	}
			   	//ff
			   	if(alt_ativo && shift_ativo)
			   	{
			   		if(opcoes.item_menuprincipal && KeyID == 49)
					{
				      	rafaelmln_menuprincipal();
				    }
				    else if(opcoes.item_busca && KeyID == 50)
				    {
				     	rafaelmln_busca();
				    }
				    else if(opcoes.item_conteudocentral && KeyID == 51)
				    {
				      	rafaelmln_conteudocentral();
				    }
				    else if(KeyID == 65)
					{				    	
				      	alto_contraste( !(localStorage.alto_contraste_ativo && localStorage.alto_contraste_ativo == 't') );
				    }
			   	}
			   	//mac os
			   	if(alt_ativo && ctrl_ativo)
			   	{
			   		if(opcoes.item_menuprincipal && KeyID == 49)
					{
				      	rafaelmln_menuprincipal();
				    }
				    else if(opcoes.item_busca && KeyID == 50)
				    {
				     	rafaelmln_busca();
				    }
				    else if(opcoes.item_conteudocentral && KeyID == 51)
				    {
				      	rafaelmln_conteudocentral();
				    }
				    else if(KeyID == 65)
					{				    	
				      	alto_contraste( !(localStorage.alto_contraste_ativo && localStorage.alto_contraste_ativo == 't') );
				    }
			   	}
			   	//alt
			   	else if(KeyID == 18)
			   	{
			    	alt_ativo = true;
			   	}
			   	//shift
			   	else if(KeyID == 16)
			   	{
			    	shift_ativo = true;
			   	}
			   	//ctrl
			   	else if(KeyID == 17)
			   	{
			    	ctrl_ativo = true;
			   	}
			}
			function KeyUp(e)
			{
			   	var KeyID = (window.event) ? event.keyCode : e.keyCode;
			   	//alt
			   	if(KeyID == 18)
			   	{
			   		alt_ativo = false;
			   	}
			   	//shift
			   	if(KeyID == 16)
			   	{
			    	shift_ativo = false;
			   	}
			   	//ctrl
			   	if(KeyID == 17)
			   	{
			    	ctrl_ativo = false;
			   	}			   	
			}

		});
	}
})( jQuery );