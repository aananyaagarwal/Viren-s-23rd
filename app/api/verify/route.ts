import {NextResponse} from 'next/server';
import {session,newToken,cookieOptions} from '../../../lib/auth';
import {evaluate} from '../../../lib/answers';
export async function POST(req:Request){const auth=await session();if(!auth)return NextResponse.json({error:'Login required'},{status:401});const {cells}=await req.json();if(!cells||typeof cells!=='object'||Array.isArray(cells)||Object.keys(cells).length>100)return NextResponse.json({error:'Invalid puzzle'},{status:400});const result=evaluate(cells);const res=NextResponse.json(result);if(result.complete)res.cookies.set('viren_session',newToken(true),cookieOptions());return res}
