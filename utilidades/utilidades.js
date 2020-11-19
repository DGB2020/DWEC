class UtilidadesCopia {

    static copiaObjetoForIn(origen,destino){
        for (var propiedad in origen){
            destino[propiedad] = origen[propiedad];
        }
    }

    static copiaObjetoAssign(origen,destino){
        return Object.assign(destino,origen);
    }

}