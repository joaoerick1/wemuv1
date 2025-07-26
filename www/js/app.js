// Inicializa o Dom7 (equivalente ao jQuery para o Framework7)
var $$ = Dom7;

// Inicializa o App do Framework7
var app = new Framework7({
  root: '#app', // Elemento principal do app no HTML
  name: 'WEMUV', // Nome do seu app
  id: 'io.framework7.wemuv', // ID do pacote
  panel: {
    swipe: true, // Habilita o gesto de arrastar para abrir o painel lateral
  },
  // Define as rotas de navegação
  routes: [
    {
      path: '/link2/',
      url: './link2.html',
    },
    {
      path: '/link3/',
      url: './link3.html',
    },
  ],
});

// Cria a "view" principal da aplicação
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Opcional: Adicionar um listener para quando o Cordova estiver pronto
document.addEventListener('deviceready', function () {
  console.log('Dispositivo pronto!');
  // Aqui você pode chamar plugins do Cordova com segurança
}, false);