

export default function Links({href, text, idd}) {
  return (
    <div className="linkdiv">
      <a href={href} className="mylinks" id={idd}>{text}</a>
    </div>
  );
}
