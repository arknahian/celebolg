'use client'
import { notFound, usePathname, useRouter, useSearchParams } from "next/navigation";

const page = () => {
    const pathname = usePathname();
    const router = useRouter();


    if (pathname !== '/ark')
        return notFound();

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default page;