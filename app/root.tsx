import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix"
import type { MetaFunction } from "remix"
import styles from "./index.css"
export const meta: MetaFunction = () => {
  return { title: "SEND FREIGHT" }
}

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },

    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
  ]
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
