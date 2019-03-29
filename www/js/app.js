var $$=Dom7;

var app = new Framework7({
  // App root element
  root: '#app',
  card: {
  swipeToClose:false,
  closeByBackdropClick: false
  },
  //theme
  theme: 'md',
  // App Name
  name: 'Calculadora',
  // App id
  id: 'com.martin.calculadora',
  // Enable statusbar
  statusbar: {
    enabled:true,
    materialBackgroundColor:'#FFFFFFFF' },
  // Add default routes
  routes: [
    {
      path: '/about/',
      componentUrl: 'about.html',
    },
    {
      path: '/crea/',
      componentUrl: 'crearsesion.html',
    },
    {
      path:'/home/',
      url:'index.html'
    }
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main',{url: '/home/'});
//firebase db
var config = {
    apiKey: "AIzaSyC4RNGLy-avlnqd9t9WOqBIaLDFPeUKyBw",
    authDomain: "myattendance-758ec.firebaseapp.com",
    databaseURL: "https://myattendance-758ec.firebaseio.com",
    projectId: "myattendance-758ec",
    storageBucket: "myattendance-758ec.appspot.com",
    messagingSenderId: "52800672208"
  };
  firebase.initializeApp(config);
var db = firebase.database();
var dbstore = firebase.firestore();

$$(document).on('page:init', '.page[data-name="home"]', function (e) {
  /*
  //creador del scrip del template7
  var template = $$('#show-template').html();
  // compilador del scrip del template7
  var compiledTemplate = Template7.compile(template);
var datos =db.ref('/users/');

 datos.once('child_added').then(function(snapshot, prevChildKey) {
   var datos =snapshot.val();
  console.log("email"+datos.email);
  console.log("username"+datos.username);
});


  //json de los datos del scrip del template7
  var context = {
  people : [
  {
  firstName: 'John',
  lastName: 'Doe'
  },
  {
  firstName: 'Mark',
  lastName: 'Johnson'
  },{
    firstName: 'Wilbert',
    lastName: 'Johnson'
  }
  ]
  };

//guardar en la variable html los datos del json
  var html = compiledTemplate(context);
  $$('.something').html(html);
*/
//finish page home




$$('.suma').on('click',function(){
  var formData = app.form.convertToData('#calculadora');
var numero1=formData.numero1;
var numero2=formData.numero2;
  var suma=parseInt(numero1) + parseInt(numero2);
  $$('.resultado').html(suma);

});

$$('.resta').on('click',function(){
  var formData = app.form.convertToData('#calculadora');
var numero1=formData.numero1;
var numero2=formData.numero2;
  var resta=parseInt(numero1) - parseInt(numero2);
  $$('.resultado').html(resta);

});


$$('.multiplicacion').on('click',function(){
  var formData = app.form.convertToData('#calculadora');
var numero1=formData.numero1;
var numero2=formData.numero2;
  var multiplicacion=parseInt(numero1) * parseInt(numero2);
  $$('.resultado').html(multiplicacion);

});


$$('.divicion').on('click',function(){
  var formData = app.form.convertToData('#calculadora');
var numero1=formData.numero1;
var numero2=formData.numero2;
  var divicion=parseInt(numero1) / parseInt(numero2);
  $$('.resultado').html(divicion);

});

});

//page about
$$(document).on('page:init', '.page[data-name="about"]', function (e) {


/*
var list=document.getElementById('list');
dbstore.collection("users").get().then((querySnapshot) => {
  list.innerHTML="";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        list.innerHTML+=
        `
        <li>${doc.data().first}</li>
        `
    });
});
*/

})
