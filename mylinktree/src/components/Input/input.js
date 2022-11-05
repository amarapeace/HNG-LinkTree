export default function Input({label, placeholder, input_type}) {
    return (
      <>
        <div className="input_page">
          <label htmlFor="" className="input_label">{label}</label>
          <br />
          <input type={input_type} placeholder={placeholder} className="input_box"  />
        </div>
      </>
    );
}




