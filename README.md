# Barra de Acessibilidade - Plugin jQuery
==================================================

O que é?
--------------------------------------

Buscando cumprir a Lei Brasileira de Inclusão:

Lei n° 16.146, de 6 de julho de 2015
"Art. 63. É obrigatória a acessibilidade nos sílios da internet mantidos por empresas com sede ou representação comercial no País ou por órgãos de governo, para uso da pessoa com deficiência, garantindo-lhe acesso as informações disponíveis, conforme as melhores práticas e diretrizes de acessibilidade adotadas internacionalmente."

Foi criado um plugin baseado em jQuery, para facilmente adicionar ao site atalhos, para otimizar o acesso ao conteúdo online da sua página WEB a pessoas com alguma limitação, principalmente visual.

*jQuery: é uma biblioteca JavaScript cross-browser desenvolvida para simplificar os scripts client side que interagem com o HTML.

Opções:
----------------------------

- Atalho Para o Menu Principal
- Atalho Para Campo de Busca
- Atalho Para o Conteúdo Central
- Ativar/Desativar o Alto Contraste

Como Utilizar:
----------------------------
```
//Exemplo
/*Iniciação e configuração da biblioteca de acessibilidade*/
		$(document).ready(function()
		{
			$('header').rafaelmln_acessibilidade(
			{
				'color' : '#cacdd0',//cor dos textos
				'background' : 'rgba(0,0,0,0.1)',//cor de fundo da barra de acessibilidade
				'item_menuprincipal' : true,//adicionar ou não item de acesso rápido ao menu [true|false]
				'elemento_menuprincipal' : '#menu ul>li>a',//caso o item de acesso rápido ao menu seja requerido, indicar ...
				'item_busca' : true,//adicionar ou não item de acesso rápido a busca do site [true|false]
				'item_conteudocentral' : true,//adicionar ou não item de acesso rápido ao conteúdo principal do site [true|false]
				'item_altocontraste' : true,//adicionar ou não item de alto contraste [true|false]
				'elemento_busca' : '#busca',
				'elemento_conteudocentral' : 'section',
				'estilo_altocontraste' : './css/contraste.css',
			});
		});
```

Requisitos:
----------------------------
Como o plugin é baseado em jQuery é necessário adicionar as bibliotecas
```
<script type="text/javascript" src="./js/jquery.min.js"></script>
<script type="text/javascript" src="./js/rafaelmln_acessibilidade.js"></script>
<script type="text/javascript">
	$(document).ready(function()
	{
		//seu código aqui
    	}
</script>    
```
