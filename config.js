const theme = {
  primary: "#ffc600",
  linkComments: [
    {
      id: 0,
      asLink: "first-comment",
      content: <h2>Mework</h2>,
      href: "/post/[id]/[comment]"
    },
    {
      id: 2,
      asLink: "second-comment",
      content: <h2>Task detail</h2>,
      href: "/post/[id]/[comment]"
    }
  ],
  routers: [
    {
      groupId: 0,
      text: "Routing",
      subRouters: [
        {
          id: 0,
          href: "/post/",
          text: "Dynamic routers"
        },
        {
          id: 1,
          href: "/catch-all-routing/",
          text: "Catch all routers"
        }
      ]
    },
    {
      groupId: 1,
      text: "Redux Example",
      subRouters: [
        {
          id: 1,
          href: "/counter/",
          text: "Counter"
        }
      ]
    }
  ]
};

export default theme;
