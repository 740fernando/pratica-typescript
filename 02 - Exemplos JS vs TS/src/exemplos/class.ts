class Mamifero{
    public quantidadeDePatas?: number;
    public temPelos?: boolean;
    public nome: string;

    constructor(nome: string){
        this.nome=nome;
    }

    public dizerNome(){
        console.log('Meu nome é ',this.nome);
    }
}

const cachorro = new Mamifero('billy');
cachorro.dizerNome();