# GraphQL

{{ PRODUCT_NAME }} provides full support for caching GraphQL APIs. Putting Layer0 in front of you GraphQL API can significantly improve its performance while reducing the amount of traffic that reaches your origin by serving cached queries from the network edge.

## Example App

You can view a [demo](https://layer0-docs-graphql-caching-example-default.layer0-limelight.link/) of this feature working and it's [source code](https://github.com/layer0-docs/graphql-caching-example).

This sections below walk you through configuring your {{ PRODUCT_NAME }} project and creating the necessary routing rules to cache GraphQL responses.

## Project Configuration

To deploy Layer0 in front of your GraphQL API, install the {{ PRODUCT_NAME }} CLI and create a new {{ PRODUCT_NAME }} configuration:

```bash
$ npm i -g {{ PACKAGE_NAME }}/cli
$ {{ CLI_NAME }} init
```

For more information on adding {{ PRODUCT_NAME }} to an existing app, see [Getting Started](/guides/getting_started#section_adding_layer0_to_an_existing_app).

### Configuring the Origin

To configure the origin domain from which your GraphQL API is served, add a backend to `{{ CONFIG_FILE }}`. For example:

```js
// {{ CONFIG_FILE }}

module.exports = {
  backends: {
    graphql: {
      domainOrIp: 'graphql-origin.my-site.com', // the hostname for your origin graphql server(s)
      hostHeader: 'graphql.my-site.com', // the hostname that clients use to connect to your graphql api
    },
  },
}
```

## Adding Caching Rules

There are two ways to cache GraphQL responses using Layer0: by adding caching rules to your Layer0 router or by using the `cache-control` header.

### Using the {{ PRODUCT_NAME }} router

Imagine you have a query named `GetProduct`:

```js
export const GET_PRODUCT_QUERY = gql`
  query GetProduct {
    product(id: $productId) {
      name
      description
      price
    }
  }
`
```

You can add a caching rule for this query by using the `graphqlOperation` method:

```js
// routes.js
import { Router } from '@layer0/core'

export default new Router().graphqlOperation('GetProduct', ({ cache, proxy }) => {
  cache({
    edge: {
      maxAgeSeconds: 60 * 60, // cache responses for one hour
      staleWhileRevalidateSeconds: 60 * 60 * 24, // serve stale responses for up to 24 hours
    },
  })
  proxy('graphql') // forward requests to the GraphQL API origin we defined in layer0.config.js
})
```

### Using the cache-control header

{{ PRODUCT_NAME }} supports caching GraphQL responses at the network edge using the standard `cache-control` HTTP response header. For example, to cache the results of a query for one hour, adding the following header to your response:

```
cache-control: max-age=3600
```

You can also serve stale responses while fetching a fresh response from the origin by using `stale-while-revalidate`. For example, to allow stale responses to be served for up to 24 hours, use:

```
cache-control: max-age=3600, stale-while-revalidate=86400
```

## Invalidating stale queries

Layer0 gives you the ability to purge individual queries from the edge cache by assigning surrogate keys to each cached response.

### Assigning Surrogate Keys

To invalidate a cached query, you must first assign a surrogate key to the response before it is cached. You can do this using the router:

```js
// routes.js
import { Router, deriveSurrogateKeysFromJson } from '@layer0/core'

export default new Router().graphqlOperation('GetProduct', ({ cache, proxy }) => {
  cache({
    edge: {
      maxAgeSeconds: 60 * 60, // cache responses for one hour
      staleWhileRevalidateSeconds: 60 * 60 * 24, // serve stale responses for up to 24 hours
    },
  })
  proxy('graphql', {
    transformResponse: deriveSurrogateKeysFromJson(json => [`product.${json.id}`]), // <~ Assigns a surrogate key to each response
  })
})
```

### Purging by Surrogate Key

To purge all responses with a given surrogate key, use the {{ PRODUCT_NAME }} CLI's [cache-clear](/guides/cli#section_cache_clear) command.

```
layer0 cache-clear --team=my-team --site=my-site --environment=production --surrogate-key="product.1"
```

[More information on clearing the cache from the CLI](/guides/cli#section_cache_clear)

You can also purge responses by surrogate key [via the REST API](/guides/rest_api#section_clear_cache) by specifying the `surrogateKeys` option.