---
title: Contributing to the {{ PRODUCT_NAME }} Documentation
---

{{ PRODUCT_NAME }} is about empowering developers and our documentation is no different. We welcome feedback whether it consists of fixing a typo or a better explanation. You can find the source code for this documentation site in a public [GitHub repository](https://github.com/{{ DOCS_REPO }}). Once you have made the desired changes, submit a [pull request](https://github.com/edgio-docs/edgio-docs/pulls). Alternatively, you can let us know how we can improve the documentation by [filing an issue](https://github.com/edgio-docs/edgio-docs/issues).

## Running the Documentation Site Locally {/* running-locally */}

Run our documentation site on your local machine through the following steps:

1.  Clone the Github repository:

    ```bash
    git clone git@github.com:{{ DOCS_REPO }}.git
    ```

2.  Install the dependencies:

    ```bash
    cd edgio-docs
    yarn install
    ```

3.  Start the Edgio dev server locally:

    ```bash
    edgio dev
    ```

Once you have performed the above steps, you will be able to view a local instance of the documentation site in your browser at http://127.0.0.1:3000.

## Architecture {/* architecture */}

{{ PRODUCT_NAME }} documentation is a Next.js application running on {{ PRODUCT_NAME }}. Each article is a Markdown file located in the [guides folder](https://github.com/{{ DOCS_REPO }}/tree/main/guides). Guides are organized by product and version (if applicable).

## How to Contribute {/* how-to-contribute */}

You may contribute to our documentation by either:

- Modifying an existing article. You should edit the Markdown file in the `./guides` directory.

- Creating an article to explain a new concept. You should create a Markdown file in the `./guides` directory.

We recommend the following process for submitting a change:

1. Clone the repo and make sure you can run the documentation site locally.
2. Make your amazing edit — even a typo fix is an amazing edit!
3. Commit and push your change branch to the origin repository.
4. Submit a [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) back to the {{ PRODUCT_NAME }} documentation repository (to the `main` branch).

<Callout type="info">

For more details, the Pro Git book has a <a href="https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project">helpful contributing guide</a> that walks you through the process of submitting a pull request to an open source repository on GitHub.

</Callout>

---

## Formatting {/* formatting */}

Use [standard Markdown syntax](https://www.markdownguide.org/cheat-sheet/) when formatting content. Follow these guidelines when formatting content:

- Apply bold formatting to all UI elements.
- Apply bold formatting to labels. A label describes the content that follows it. The two basic types of labels are explained below.
  - **Paragraph:** This type of label is a paragraph that solely consists of the label (e.g., **Syntax:** or **Example:**).
  - **List Item:** This type of label appears at the start of a list item. For example, notice how this list item has been formatted.
- Enclose the following type of content with a pair of backticks: HTTP status codes, cache status codes, headers, sample configurations, sample values, code elements, and API properties.

  **Example:**

  A successful request returns a `200 OK`.

- Capitalize placeholder values and enclose them within angle brackets. A placeholder is a word or phrase that represents a value.

  **Example:**

  Add a CNAME DNS entry whose value is set to `_acme-challenge.<DOMAIN>`.

## Callout {/* callout */}

Add a callout to bring attention to a specific part of the guide.

```tsx
// set type to: 'info' | 'tip' | 'important' | 'warning' | 'danger';

<Callout type="info">

  A note provides additional information.

</Callout>

<Callout type="tip">

  A tip describes a best practice or provides advice.

</Callout>

<Callout type="important">

  An important note provides essential information.

</Callout>

<Callout type="warning">

  A warning provides cautionary information about a potential pitfall.

</Callout>

<Callout type="danger">

  Identifies a configuration or action that can negatively impact your site's performance or behavior.

</Callout>

```

The above code renders:

<Callout type="info">

A note provides additional information.

</Callout>

<Callout type="tip">

A tip describes a best practice or provides advice.

</Callout>

<Callout type="important">

An important note provides essential information.

</Callout>

<Callout type="warning">

A warning provides cautionary information about a potential pitfall.

</Callout>

<Callout type="danger">

Identifies a configuration or action that can negatively impact your site's performance or behavior.

</Callout>

---

## Fenced Code Block {/* codeblock */}

Fence code excerpts with triple backticks. If the code is language-specific, then you should indicate that language by appending it to the starting triple backticks (e.g., ` ```html ` or ` ```bash `).

```js
// This codeblock has the 'js' language module (with JS comment)
console.log(new Date());
```

```html
<!-- This codeblock has the 'html' language module (with HTML comment) -->
<button type="button" class="btn btn-primary">Primary</button>
```

```bash
# This codeblock has the 'bash' language module (with Bash comment)
echo "Hello World"
```

```
// This codeblock has not been assigned a language module
upload.build.layer0.co
app.layer0.co
```

You may highlight various lines of code by specifying line number ranges within `ins=""`, `del=""`, or `highlight=""`, where the value inside `""` can be `"1,2,3,8,9,10"` or `"1-3,8-10"`, for example.

```js ins="1-3,8-10"
new Router()
  .get('/pages/c/:categoryId', ({cache}) => {
    cache({
      browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: 60 * 60 * 24,
      },
      edge: {
        maxAgeSeconds: 60 * 60 * 24,
        staleWhileRevalidateSeconds: 60 * 60,
      },
    });
  })
  .fallback(({renderWithApp}) => renderWithApp());
```

To highlight lines based on a diff, mark lines with a leading `+`/`-` and specify the `diff` attribute such as: ` ```js diff `

```js diff
  new Router()
  .get('/pages/c/:categoryId', ({ cache }) => {
    cache({
+      browser: {
+        maxAgeSeconds: 0,
+        serviceWorkerSeconds: 60 * 60 * 24,
+      },
-      edge: {
-        maxAgeSeconds: 60 * 60 * 24,
-        staleWhileRevalidateSeconds: 60 * 60,
-      },
    })
  })
  .fallback(({ renderWithApp }) => renderWithApp())
```

## Video {/* video */}

```tsx
<Video src="video src url" />
```

---

## Button Link {/* button-link */}

```tsx
/*
interface IButtonLinkProps {
 variant: 'fill' | 'stroke';
 type: 'default' | 'code' | 'deploy';
 children: React.ReactNode;
 href: string | UrlObject;
 withIcon: boolean;
}
*/


<ButtonLink variant="fill" type="default" href="...">
 Try the Next.js SSR Example Site
</ButtonLink>
<ButtonLink variant="stroke" type="code" withIcon={true} href="...">
 View the Code
</ButtonLink>
<ButtonLink variant="stroke" type="deploy" withIcon={true} href="..." />
```

Renders:

<ButtonLink
  variant="fill"
  type="default"
  href="https://edgio-community-examples-nextjs-live.layer0-limelight.link/">
  Try the Next.js SSR Example Site
</ButtonLink>
<ButtonLink
  variant="stroke"
  type="code"
  withIcon={true}
  href="https://github.com/edgio-docs/edgio-nextjs-example">
  View the Code
</ButtonLink>
<ButtonLink
  variant="stroke"
  type="deploy"
  withIcon={true}
  href="https://app.layer0.co/deploy?button&deploy&repo=https%253A%252F%252Fgithub.com%252Fedgio-docs%252Fedgio-nextjs-example"
/>

---

## Button Links Group {/* button-links-group */}

```tsx
<ButtonLinksGroup>
  <ButtonLink variant="fill" type="default" href="...">
    Try the Next.js SSR Example Site
  </ButtonLink>
  <ButtonLink variant="stroke" type="code" withIcon={true} href="...">
    View the Code
  </ButtonLink>
  <ButtonLink variant="stroke" type="deploy" withIcon={true} href="..." />
</ButtonLinksGroup>
```

Renders:

<ButtonLinksGroup>
  <ButtonLink
    variant="fill"
    type="default"
    href="https://edgio-community-examples-nextjs-live.layer0-limelight.link/">
    Try the Next.js SSR Example Site
  </ButtonLink>
  <ButtonLink
    variant="stroke"
    type="code"
    withIcon={true}
    href="https://github.com/edgio-docs/edgio-nextjs-example">
    View the Code
  </ButtonLink>
  <ButtonLink
    variant="stroke"
    type="deploy"
    withIcon={true}
    href="https://app.layer0.co/deploy?button&deploy&repo=https%253A%252F%252Fgithub.com%252Fedgio-docs%252Fedgio-nextjs-example"
  />
</ButtonLinksGroup>

## Templates {/* templates */}

Templates are shared content that can be reused across multiple guides. They are located in the `src/templates` directory. You can include a template in a guide by using the mustache syntax `{{ template_name }}`, where `template_name` is the name of the template file without the `.md` extension.

```md filename="src/templates/sample_template.md"
Content in this template can be shared across multiple guides.
```

```md filename="guides/applications/v7/sample_guide.md"
This guide includes a shared template.

{{ sample_template }}

```

## Versioning {/*versioning*/}

_This section is only applicable to the {{ PRODUCT }} {{ PRODUCT_APPLICATIONS }} documentation._

All {{ PRODUCT_APPLICATIONS }} guides are based on the content files within `./guides/applications` directory. Guides are organized by version. For example, the `getting_started.md` guide for the `v7` version of the {{ PRODUCT }} {{ PRODUCT_APPLICATIONS }} documentation would be located at `./guides/applications/v7/getting_started.md`.

If a guide has minor changes between versions, you can conditionally render content based on the current version of the documentation being browsed. For example, if you wanted to render a different message for the `v6` version of the guide, you could use the `<Condition version="..." />` component. This is most common used with shared templates (`src/templates`).

```md filename="src/templates/sample_template.md"
Content in this template will be shared across multiple versions of the documentation.

<Condition version="7">
  Content in this block will only be shown for the v7 version of the guide.
</Condition>

<Condition version="<=6">
  Content in this block will be shown for the v6 and earlier versions of the guide.
</Condition>
```
