class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch(this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }
        return `O ${this.tipo} atacou usando ${ataque}.`;
    }
}

// Exemplo de uso:
document.getElementById('criarHeroi').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const tipo = document.getElementById('tipo').value;

    const heroi = new Heroi(nome, idade, tipo);
    document.getElementById('resultado').innerHTML = heroi.atacar();
});
