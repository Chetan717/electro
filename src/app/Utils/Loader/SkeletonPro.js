import React from "react";
import { Card, Skeleton ,Spinner} from "@nextui-org/react";

export default function SkeletonPro() {
    const pro = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 lg:gap-10 gap-2">
            <Spinner/>

            </div>
        </>
    );
}
