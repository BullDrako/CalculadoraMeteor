Template.multiplicar.events({
    'submit form': function(evento){
        evento.preventDefault();


        var multiplica = {
            operador1: evento.target.op1.value,
            operacion: "*",
            operador2: evento.target.op2.value,
            igual: "=",
            resultado: parseInt(evento.target.op1.value) * parseInt(evento.target.op2.value)
        };

        multiplica._id = Numeros.insert(multiplica);

        Router.go('/', multiplica);

    }
});
