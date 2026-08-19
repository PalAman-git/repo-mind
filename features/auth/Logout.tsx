'use client'

import { Button } from '@/components/ui/button'
import { useLogout } from './hooks/useLogout'
import { Spinner } from '@/components/ui/spinner';

const Logout = () => {
    const { mutate: logout, isPending } = useLogout();

    return (
        <Button disabled={isPending} onClick={() => logout()}>
            {isPending ? <><Spinner data-icon="inline-start"/> Logging out...</> : "Logout"}
        </Button>
    )
}

export default Logout