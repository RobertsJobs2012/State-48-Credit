import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "State 48 Credit — Arizona's Most Trusted Credit Repair";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #141210 0%, #1B1714 45%, #211913 100%)",
          color: "#FFF8F0",
          fontFamily: "sans-serif",
        }}
      >
        {/* Glow orbs */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(196,98,45,0.28) 0%, rgba(196,98,45,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(43,191,179,0.20) 0%, rgba(43,191,179,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #C4622D 0%, #9F4D24 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#141210",
              fontSize: 20,
              fontWeight: 900,
            }}
          >
            48
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, fontWeight: 700 }}>State 48</span>
            <span
              style={{
                fontSize: 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#9F8E80",
                marginTop: 2,
              }}
            >
              Credit
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(43,191,179,0.18)",
              color: "#46D4C7",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            Arizona · Since 2010
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Credit repair that actually{" "}
            <span style={{ color: "#D97840" }}>works.</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#C8B9AA",
              maxWidth: 820,
              marginTop: 4,
            }}
          >
            Flat one-time fee. Done in months, not years. Built in Phoenix.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(76,61,49,0.6)",
            paddingTop: 24,
            color: "#9F8E80",
            fontSize: 20,
          }}
        >
          <span>state48credit.com</span>
          <span style={{ color: "#F5EFE7", fontWeight: 600 }}>
            15,892 items removed · 4.9★
          </span>
        </div>
      </div>
    ),
    size
  );
}
