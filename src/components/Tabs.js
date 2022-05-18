import { useState } from 'react'

const tabs = [
    {
        id: 1,
        name: 'Shane',
    },
    {
        id: 2,
        name: 'Mikey',
    },
    {
        id: 3,
        name: 'Caleb',
    },
]

const Tabs = () => {
    return (
        <>
            {tabs.map((tab) => (
                <h3>{tab.name}</h3>
            ))}
        </>
    )}

export default Tabs
