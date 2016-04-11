/**
 * Created by edgar on 5/04/16.
 */

Router.configure({
    layoutTemplate: 'layout'
    
});

Router.route('/', {name: 'listaResultados'});

Router.route('/sumar', {name: 'sumar'});
Router.route('/restar', {name: 'restar'});
Router.route('/multiplicar', {name: 'multiplicar'});
Router.route('/dividir', {name: 'dividir'});