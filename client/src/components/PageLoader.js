import React from 'react'
import Loader from "react-loader-spinner";

const PageLoader = () => {
    return (
        <>
            <div className="loader">
                <Loader
                    type="TailSpin"
                    color="#343a40"
                    height={70}
                    width={70}
                />
            </div>
        </>
    )
}
export default PageLoader
