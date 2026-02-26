import { ImageResponse } from "next/og";
import { createElement } from "react";

export const runtime = "edge";
export const contentType = "image/png";

const WIDTH = 1200;
const HEIGHT = 630;

export async function GET() {
  try {
    const root = createElement(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#ffffff",
          color: "#111827",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        },
      },
      createElement(
        "div",
        {
          style: {
            fontSize: 82,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: 24,
            color: "#09090b",
          },
        },
        "Vengatesh Raman",
      ),
      createElement(
        "div",
        {
          style: {
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            color: "#3f3f46",
          },
        },
        "Senior Frontend Engineer",
      ),
    );

    return new ImageResponse(
      root,
      {
        width: WIDTH,
        height: HEIGHT,
        headers: {
          "Cache-Control": "public, immutable, no-transform, max-age=31536000",
        },
      },
    );
  } catch {
    return new Response("Failed to generate OpenGraph image", { status: 500 });
  }
}
