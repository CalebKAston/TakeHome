import Layout from '../components/layout';
import ArticleImage from '../components/article-image';
import ArticleVideo from '../components/article-video';

const Article = (props) => (
    <Layout>
        <h2>{props.article.title}</h2>
        <ArticleImage images={props.article.images} />
        {props.article.content.map((content, index) => (
            <section key={`section-${index}`}>
                {content.subtitle && <h3>{ content.subtitle }</h3>}
                <p>{ content.text }</p>
                {index === 0 && <ArticleVideo video={props.article.video} />}
            </section>
        ))}
        <style jsx>{`
        `}</style>
    </Layout>
);

Article.getInitialProps = async function(context) {
    const { url } = context.query;
    const res = await fetch(`https://interview-project-17987.herokuapp.com/api/article/${url}`);
    const data = await res.json();

    return {
        article: data
    };
}

export default Article;