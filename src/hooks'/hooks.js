import React, {useEffect, useState} from 'react'

export const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
      setIsOnline(status)
    }
    useEffect(() => {
        handleStatusChange(true)
    })

  return isOnline
}
