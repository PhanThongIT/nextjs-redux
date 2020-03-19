import { useRouter } from "next/router";
import _ from "lodash";

const Comment = () => {
  const router = useRouter();
  const params = router.query.params || [];
  console.log("Catch all routing: ", router);

  return (
    <>
      <h1>Slug: {params.join("/")}</h1>

      <h1>-----Render list params-----</h1>
      <ul>{_renderListParams(params)}</ul>
    </>
  );
};

const _renderListParams = params => {
  if (!_.isEmpty(params)) {
    return _.map(params, (item, index) => {
      return (
        <li>
          Param {index}: {item}
        </li>
      );
    });
  } else {
    return undefined;
  }
};

export default Comment;
