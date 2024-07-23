// app/pages/posts/[slug].tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/navigation';
import useTranslation from 'next-translate/useTranslation';

interface PostProps {
    title: string;
    content: string;
}

function Post({ title, content }: PostProps) {
    const { t } = useTranslation('post');
    const router = useRouter();
    console.log(router)
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{t('title')}</p>
            <p>{t('content')}</p>
            <p>Current Locale: </p>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug }: any = params;
    const postData = {
        title: `Post Title for ${slug}`,
        content: `Post Content for ${slug}`
    };

    return {
        props: {
            title: postData.title,
            content: postData.content
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    // Generate dynamic paths based on API or database
    const paths = [
        { params: { slug: 'first-post' } },
        { params: { slug: 'second-post' } }
    ];

    return {
        paths,
        fallback: false
    };
};

export default Post;
