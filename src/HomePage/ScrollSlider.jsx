import "./ScrollSlider.scss";

export default function ScrollSlider() {
  return (
    <div className="section4 d-flex justify-content-center align-items-center col-12">
      <div className="overlay  d-flex justify-content-center align-items-center w-100 h-100"></div>
      {/* Add text content here */}
      <div className="content container  text-center col-12">
        <h1 className="text-center col-12">المحاماة مهنة ورسالة</h1>
        <p style={{lineHeight:'35px'}}>المحاماة مهنه من اهم واشرف المهن ، وتكمن اهميتها فى المجتمع فى انها تشارك السلطه القضائيه فى تحقيق العدالة وفى تاكيد سيادة القانون وفى كفالة حق الدفاع عن حقوق المواطنين وحرياتهم</p>
      </div>
    </div>
  );
}

