Template.restar.events({
    'submit form': function(evento){
        evento.preventDefault();


        var resta = {
            operador1: evento.target.op1.value,
            operador2: evento.target.op2.value,
            igual: "=",
            resultado: parseInt(evento.target.op1.value) - parseInt(evento.target.op2.value)
        };

        resta._id = Numeros.insert(resta);

        Router.go('/', resta);

    }
});
