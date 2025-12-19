"use client";

import { FAQ } from "./faq"
import { TopReasons } from "./reason"
import { ServicePlans } from "./service"

export const HomePage = () => {
    return (
        <>
            <TopReasons />
            <ServicePlans />
            <FAQ />

        </>
    )
}