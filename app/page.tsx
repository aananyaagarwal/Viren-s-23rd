import {session} from '../lib/auth';
import Birthday from '../components/Birthday';
import Login from '../components/Login';
import stories from '../content/stories.json';
export const dynamic='force-dynamic';
export default async function Page(){const s=await session();return s?<Birthday stories={s.unlocked?stories:[]} unlockedInitially={s.unlocked}/>:<Login/>}
