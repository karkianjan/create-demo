import React, {useEffect, useState} from 'react'
import {useIsOnline } from './hooks'

    
export const FriendUpdate = () => {
    const isOnline= useIsOnline()

  return (
    <div>
<h1>
{ isOnline?'online':'offline' }
</h1>
    </div>
  )
}
