import { GetStaticPropsContext } from "next";
import Link from "next/link";

const ExamplePage = () => {
    return (
        <>
            <h1>Good Morning!</h1>
            <Link href="/mypage">Navigate to MyPage</Link>
        </>
    );
};

export default ExamplePage;
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
