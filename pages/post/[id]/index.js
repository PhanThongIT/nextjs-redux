import { useRouter } from "next/router";
import Link from "next/link";
import config from "../../../config";
import _ from "lodash";

const linkComments = _.get(config, "linkComments");

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("Router object: ", router);

  return (
    <>
      <h1>Post: {id}</h1>
      <ul>{_renderLinkComment(id)}</ul>
    </>
  );
};

const _renderLinkComment = id => {
  if (!_.isEmpty(linkComments)) {
    return _.map(linkComments, (item, index) => {
      return (
        <li key={index}>
          <Link
            href={_.get(item, "href")}
            as={`/post/${id}/${_.get(item, "asLink")}`}
          >
            {_.get(item, "content")}
          </Link>
        </li>
      );
    });
  } else {
    return undefined;
  }
};

export default Post;
