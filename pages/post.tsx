import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";

export default function Post(props) {
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary && props.show.summary.replace(/<[/]?p>/g, "")}</p>
      <img src={props.show.image.medium} />
    </Layout>
  );
}

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};
