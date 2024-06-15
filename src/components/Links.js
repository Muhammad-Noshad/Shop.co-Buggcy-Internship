import "../styles/links.css";

const Links = (props) => {
  return (
    <div className="links">
      <p className="title">{ props.title }</p>
      {
        props.links.map((link, index) => {
          return <p key={index}>{ link }</p>
        })
      }
    </div>
  );
}
 
export default Links;