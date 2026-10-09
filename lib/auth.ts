import {createHmac,timingSafeEqual} from 'crypto';
import {cookies} from 'next/headers';
const name='viren_session';
function secret(){return process.env.SESSION_SECRET || (process.env.NODE_ENV!=='production'?'local-development-secret-not-for-production':'');}
function sign(data:string){return createHmac('sha256',secret()).update(data).digest('hex')}
export function newToken(unlocked=false){const payload=Buffer.from(JSON.stringify({exp:Date.now()+1000*60*60*24*14,unlocked})).toString('base64url');return `${payload}.${sign(payload)}`}
export function parseToken(token:string|undefined):{exp:number,unlocked:boolean}|null{try{if(!token || !secret())return null;const [payload,sig]=token.split('.');if(!sig||sig.length!==64)return null;const a=Buffer.from(sign(payload),'hex'),b=Buffer.from(sig,'hex');if(!timingSafeEqual(a,b))return null;const obj=JSON.parse(Buffer.from(payload,'base64url').toString());return Number(obj.exp)>Date.now()?obj:null}catch{return null}}
export async function session(){return parseToken((await cookies()).get(name)?.value)}
export function cookieOptions(){return {httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax' as const,path:'/',maxAge:60*60*24*14}}
export function passwordOK(input:string){const want=process.env.BIRTHDAY_PASSWORD;if(!want)return false;const a=Buffer.from(input),b=Buffer.from(want);return a.length===b.length&&timingSafeEqual(a,b)}
