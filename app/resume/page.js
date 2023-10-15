import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    let currentYear = new Date().getFullYear();
    redirect(`/year/${currentYear}`)
}

export default page