# Router v6:

> https://reactrouter.com/docs/en/v6/upgrading/v5#rename-navlink-exact-to-navlink-end

En la versión 6 del Router en lugar de `<Redirect/>` se utiliza `<Navigate/>`

> Normal <Redirect> elements that are not inside a <Switch> are ok to remain. They will become <Navigate> elements in v6.
> `return <Navigate to="/home" replace state={state} />;`

**exact** se sustituye por un **\***.

> `<Route path>` and `<Link to>` are relative. This means that they automatically build on the parent route's path and URL so you don't have to manually interpolate match.url or match.path
> `<Route exact>` is gone. Instead, routes with descendant routes (defined in other components) use a trailing \* in their path to indicate they match deeply
> You may put your routes in whatever order you wish and the router will automatically detect the best route for the current URL. This prevents bugs due to manually putting routes in the wrong order in a `<Switch>`

sdsds
