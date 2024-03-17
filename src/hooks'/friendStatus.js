
import React, {useEffect, useState} from 'react'
import { useIsOnline } from './hooks'


export const FriendStatus = () => {
    const isOnline= useIsOnline()

  return (
    <div>
        <h1>friendStatus</h1>
        <p style={{color: isOnline ? 'green' : 'red'}}>Anjan is online</p>

    </div>
  )
}
