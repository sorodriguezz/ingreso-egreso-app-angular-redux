

export class IngresoEgreso {
    constructor(
        public descripcion?: string,
        public monto?: number,
        public tipo?: string,
        public uid?: string,
        // public createAt?: number
    ) {}
}