import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="p-10 border-t border-slate-700"
      style={{
        backgroundImage:
          'url("https://websitedemos.net/marketing-agency-02/wp-content/uploads/sites/725/2020/10/bg-001-free-img.png")',
      }}
    >
      <div
        className="ast-builder-grid-row-container-inner"
        style={{ boxSizing: "inherit" }}
      >
        <div className="grid grid-cols-2 px-24 min-h-[80px] items-center">
          <div>
            <div
              className="ast-footer-copyright"
              style={{
                boxSizing: "inherit",
                width: "100%",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              <p
                style={{
                  boxSizing: "inherit",
                  border: "0px",
                  margin: "0px",
                  outline: "0px",
                  padding: "0px",
                  fontSize: "100%",
                  fontStyle: "inherit",
                  fontWeight: "inherit",
                  verticalAlign: "baseline",
                  marginBottom: "0px",
                }}
              >
                Copyright © 2024{" "}
                <span className="font-bold">Digital Tribe</span>
              </p>
            </div>{" "}
          </div>
          <div
            className="site-footer-below-section-2 site-footer-section site-footer-section-2"
            style={{
              boxSizing: "inherit",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="footer-widget-area widget-area site-footer-focus-item ast-footer-html-1"
              style={{
                boxSizing: "inherit",
                width: "100%",
                marginBottom: "0px",
                fontSize: "1rem",
                display: "block",
              }}
            >
              <div
                className="ast-header-html inner-link-style-"
                style={{ boxSizing: "inherit" }}
              >
                <div
                  className="ast-builder-html-element"
                  style={{
                    boxSizing: "inherit",
                    color: "#ffffff",
                    fontSize: "1rem",
                    textAlign: "right",
                  }}
                >
                  <p className="font-bold text-lg underline-offset-4 hover:underline hover:cursor-pointer">
                    <Link
                      href={"https://github.com/Amir-Kermanshahani"}
                      target="_blank"
                    >
                      Amir Kermanshahani
                    </Link>
                  </p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
