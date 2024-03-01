import React from "react";

export default function About(props) {
  // const [myStyle, setMystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMystyle({ color: "black", backgroundColor: "white" });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils simplifies text analysis. Our platform provides a rapid
              and efficient method to examine your text, whether you need word
              count, character count, or other functions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Free of charge, TextUtils serves as a comprehensive character
              counter tool, providing instantaneous statistics on character and
              word counts for any given text. With its ability to accurately
              report word and character numbers, it proves invaluable for
              crafting text within specified limits.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is compatible with all major web browsers including
              Chrome, Firefox, Internet Explorer, Safari, and Opera. Its
              versatility extends to various platforms such as Facebook, blogs,
              books, Excel documents, PDFs, and essays, making it an
              indispensable tool for content creators across diverse mediums.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
