Template.dividir.events({
    'submit form': function(evento){
        evento.preventDefault();


        var divide = {
            operador1: evento.target.op1.value,
            operador2: evento.target.op2.value,
            igual: "=",
            resultado: parseInt(evento.target.op1.value) / parseInt(evento.target.op2.value)
        };

        divide._id = Numeros.insert(divide);

        Router.go('/', divide);

    }
});
