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

            <Button title="Large" styles="text-lg" />
            <Button title="small" styles="text-sm" />
            <Button title="Rounded-small" styles="rounded-sm" />
            <Button title="Rounded-medium" styles="rounded-md" />
            <Button title="Rounded-large" styles="rounded-lg" />

        </div>
    )
}

export default landing
