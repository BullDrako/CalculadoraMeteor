Template.sumar.events({
    'submit form': function(evento){
        evento.preventDefault();


        var suma = {
            operador1: evento.target.op1.value,
            operacion: evento.target.op.value,
            operador2: evento.target.op2.value,
            igual: "=",
            resultado: parseInt(evento.target.op1.value) + parseInt(evento.target.op2.value)
        };

        suma._id = Numeros.insert(suma);

        Router.go('/', suma);

    }
});
