export enum HttpCode {
    E200 = 200,
    E201 = 201,
    E400 = 400, // input error
    E404 = 404, // not found
}

export class Err {
    data: any;
    code: number;
    msg: string;

    constructor(code: HttpCode = HttpCode.E200,
                msg: string = 'Success',
                data = null,
    ) {
        this.data = data
        this.code = code
        this.msg = msg
    }
}
