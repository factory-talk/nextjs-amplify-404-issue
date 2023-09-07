import { GetStaticPropsContext } from "next";
import Link from "next/link";

const MyPage = () => {
    return (
        <>
            <h1>Good Morning!</h1>
            <Link href="/example">Navigate to ExamplePage</Link>
        </>
    );
};

export default MyPage;
export async function getServerSideProps({
    locale,
    defaultLocale,
}: GetStaticPropsContext) {
    console.log({ locale, defaultLocale });
    return {
        props: {
            messages: {
                foo: "hello",
            },
        },
    };
}
