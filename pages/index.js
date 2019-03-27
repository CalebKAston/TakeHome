import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Index = (props) => (
    <Layout>
        <h2>Article Archive</h2>
        <ul>
            {props.articles.map(article => (
                <li key={article.url}>
                    <Link href={`/article/${article.url}`}>
                        <a>{ article.title }</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch(`https://interview-project-17987.herokuapp.com/api/article`);
    const data = await res.json();

    return {
        articles: data
    };
}

export default Index;