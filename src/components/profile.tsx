'use client';

import { useSession } from 'next-auth/react';

function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>From client: user is signed in</div>
  } 

  return <div>User is not signed in</div>

  
}

export default Profile;