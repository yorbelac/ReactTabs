import { useState } from 'react'

const tabs = [
    {
        id: 1,
        name: 'Shane',
        total: 875,
    },
    {
        id: 2,
        name: 'Mikey',
        total: 326,
    },
    {
        id: 3,
        name: 'Caleb',
        total: 213,
    },
]

const Tabs = () => {
    return (
        <>
            {tabs.map((tab) => (
                <h3>{tab.name}<br></br>{tab.total}</h3>
            ))}

        </>
    )}

export default Tabs
