import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import "../src/styles/globals.scss";
import "../src/styles/tailwind.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }

    return <Component {...pageProps} />;
}
