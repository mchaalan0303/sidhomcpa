import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nazih A. Sidhom, CPA — Accounting & Tax Services, Cypress CA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1a365d",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo mark + label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              backgroundColor: "#c9a84c",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              fontWeight: "700",
              color: "#1a365d",
            }}
          >
            N
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#ffffff", fontSize: "20px", fontWeight: "600" }}>
              Nazih A. Sidhom
            </span>
            <span style={{ color: "#c9a84c", fontSize: "14px", letterSpacing: "0.1em" }}>
              CERTIFIED PUBLIC ACCOUNTANT
            </span>
          </div>
        </div>

        {/* Center: main message */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#c9a84c",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              fontSize: "64px",
              fontWeight: "800",
              color: "#ffffff",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            Expert CPA Services
            <br />
            <span style={{ color: "#c9a84c" }}>You Can Trust</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: "1.4",
              maxWidth: "700px",
            }}
          >
            Accounting, tax planning &amp; consulting for businesses and
            individuals since 1992.
          </div>
        </div>

        {/* Bottom: stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "32px",
          }}
        >
          {[
            ["30+", "Years Experience"],
            ["CPA", "Certified Team"],
            ["Full Service", "Accounting & Tax"],
            ["Cypress, CA", "Est. 1992"],
          ].map(([val, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ color: "#ffffff", fontSize: "22px", fontWeight: "700" }}>
                {val}
              </span>
              <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}