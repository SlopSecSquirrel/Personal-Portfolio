
import { redirect } from 'next/navigation'

// We put a redirect here in case the user tries to navigate directly to /vulns. There's no legitimate reason to do that, so we block it.
export default async function Vulns({ params }) {
    
    return redirect('/')

}