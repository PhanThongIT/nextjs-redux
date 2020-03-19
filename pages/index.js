import React, { useState } from "react";
import _ from "lodash";
import config from "../config";
import Link from "next/link";
import Counter from "../src/components/Counter";

const routers = _.get(config, "routers");

function HomePage() {
  return (
    <div>
      <h1>Menu</h1>
      {RenderRouters(routers)}
    </div>
  );
}

const RenderRouters = routers => {
  if (!_.isEmpty(routers)) {
    return _.map(routers, RenderGroup);
  } else {
    return undefined;
  }
};

const RenderGroup = (group, idxGroup) => {
  const [isShow, setToggle] = useState(false);

  return (
    <div key={idxGroup}>
      <h3 onClick={() => setToggle(!isShow)}>
        {isShow ? " - " : " + "} {_.get(group, "text")}
      </h3>
      {isShow && (
        <ul>
          {!_.isEmpty(group.subRouters) &&
            _.map(group.subRouters, (router, index) => {
              return (
                <li key={index} className={"btn btn-link"}>
                  <Link
                    href={_.get(router, "href")}
                    as={`${_.get(router, "href")}${_.get(router, "id")}`}
                  >
                    {_.get(router, "text")}
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
