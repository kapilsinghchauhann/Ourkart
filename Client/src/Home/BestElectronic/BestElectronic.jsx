import "./BestElectronic.css";

export default function BestElectronic() {
  const headline = "Best of Electronics";
  const image = "/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.webp";
  const add = "/ce3cf81edb760559.webp";

  return (
    <div>
      <div className="mainContainer">
        <div className="container">
          <h1>{headline}</h1>
          <div className="holder">
            <a href="#">
              <div className="subContainer">
                <img src={image} alt="image" />
                <p>True wireless</p>
                <h2>grab now</h2>
              </div>
            </a>
            <a href="#">
              <div className="subContainer">
                <img src="Fastracksmart.jpeg" alt="image" />
                <p>Fastrack Smartwatches</p>
                <h2>From ₹1,399</h2>
              </div>
            </a>
            <a href="#">
              <div className="subContainer">
                <img src={image} alt="image" />
                <p>Monitors</p>
                <h2>From ₹6599</h2>
              </div>
            </a>
            <a href="#">
              <div className="subContainer">
                <img src="Projectors.jpeg" alt="image" />
                <p>Projector</p>
                <h2>From ₹6990</h2>
              </div>
            </a>
            <a href="#">
              <div className="subContainer">
                <img src="Topmirrorless.jpeg" alt="image" />
                <p>Top Mirrorless Camera</p>
                <h2>Shop now!</h2>
              </div>
            </a>
            <a href="#">
              <div className="subContainer">
                <img src="Printors.jpeg" alt="image" />
                <p>Printers</p>
                <h2>From ₹2336</h2>
              </div>
            </a>
          </div>
        </div>

        <div className="add">
          <a href="#">
            <img src={add} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
