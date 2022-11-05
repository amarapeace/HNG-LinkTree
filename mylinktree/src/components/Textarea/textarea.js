export default function Textarea() {
    return (
      <>
      <div className="textareadiv">
        <label htmlFor="">Message</label>
        <br />
        <textarea
          name=""
          id=""
          cols="75"
          rows="10"
          placeholder="Send me a message and I'll reply as soon as possible..."
          className="textarea"
        ></textarea>
        </div>
      </>
    );
}