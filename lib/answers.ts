import {entries} from './puzzle';
const solutions:Record<number,string>={1:'BU',2:'DUCK',3:'CHICKEN',4:'GREY',5:'ESPRESSO',6:'MOMENTUM',7:'FOUNTAIN',8:'RAT',9:'BALLERINA',10:'LO'};
export function evaluate(cells:Record<string,string>){const valid=entries.filter(e=>Array.from({length:e.len},(_,i)=>cells[`${e.r+(e.d==='down'?i:0)}-${e.c+(e.d==='across'?i:0)}`]||'').join('').toUpperCase()===solutions[e.n]).map(e=>e.n);return {valid,complete:valid.length===entries.length}}
