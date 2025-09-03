import './ImgCom.css'

function ImgCom() {
  const img1 = "https://rukminim2.flixcart.com/fk-p-flap/3240/1580/image/c488b19b92625bfb.jpg?q=60";
  const img2 = "https://rukminim2.flixcart.com/fk-p-flap/3240/1580/image/fc8cbe421b1c8c3f.jpg?q=60";
  const img3 = "https://rukminim2.flixcart.com/fk-p-flap/3240/1580/image/370bcff4a52daf42.jpg?q=60";
  return (
    <div>
      <div className="img">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/3140/1140/image/34fa6dba5601827b.jpg?q=60" alt="img" />
      </div>

      <div className="maina">
            <div className="carousel">
                <a href="#"><div className="card"><img src={img1} alt="" /></div></a>
                <a href="#"><div className="card"><img src={img2} alt="" /></div></a>
                <a href="#"><div className="card"><img src={img3} alt="" /></div></a>
            </div>
        </div>
    </div>
  )
}

export default ImgCom