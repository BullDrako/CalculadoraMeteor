Session.set('pageTitle', 'Numeros');

Template.listaResultados.helpers({
    operaciones: function(){
        return Numeros.find();
    }
});