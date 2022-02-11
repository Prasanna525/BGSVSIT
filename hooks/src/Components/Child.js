import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../App'

const Child = () => {
    return (
        <div>
            <useContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            <div>
                                <h1>Child component context - {user}</h1>
                                <h2></h2>
                            </div>
                        </ChannelContext.Consumer>
                    )
                }}
            </useContext.Consumer>
        </div>
    )
}

export default Child