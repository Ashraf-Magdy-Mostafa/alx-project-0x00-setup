import React from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'

function landing() {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />

            <Button title="Large" className="text-lg" />
            <Button title="small" className="text-sm" />
            <Button title="Rounded-md" className="rounded-md" />
            <Button title="Rounded-full" className="rounded-full" />

        </div>
    )
}

export default landing
