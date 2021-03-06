import {TsType as BuffaloTsType} from '../../../buffalo';

type MtType = number|number[]|string|Buffer|{[s: string]: number|string}[];

interface MtParameter {
    name: string;
    parameterType: number;
}

interface MtCmd {
    name: string;
    ID: number;
    type: number;
    request?: MtParameter[];
    response?: MtParameter[];
}

// eslint-disable-next-line
type ZpiObjectPayload = any;

interface BuffaloZnpOptions extends BuffaloTsType.Options {
    startIndex?: number;
}

export {ZpiObjectPayload, MtParameter, MtCmd, MtType, BuffaloZnpOptions};
