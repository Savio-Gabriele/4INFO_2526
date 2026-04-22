class Quadrato{
    constructor(lato){
        this.lato = lato;
    }

    getLato(){
        return this.lato;
    }

    setLato(lato){
        this.lato = lato;
    }

    getArea(){
        return this.lato * this.lato;
    }

    getPerimetro(){
        return this.lato * 4;
    }
}

function main(){
    let q = new Quadrato(5);
    console.log(q.getLato());
    console.log(q.getArea());
    console.log(q.getPerimetro());
}

main();
