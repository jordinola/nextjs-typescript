'use client'

import Error from "next/error"

const GlobalError = ({ error }: {error: Error & {digest?: string}}) => {
    return (
        <html>
            <body>
                <h2>Global Error</h2>
            </body>
        </html>
    )
}

export default GlobalError