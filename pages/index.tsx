import { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();
    router.push("/example");
    return (
        <>
            <h1>Good</h1>
        </>
    );
};

export default Home;

// export async function getServerSideProps({
//     locale,
//     defaultLocale,
// }: GetStaticPropsContext) {
//     return {
//         props: {
//             messages: await getNextIntlMessages(
//                 locale,
//                 defaultLocale,
//                 "interface-profiles",
//             ),
//         },
//     };
// }
