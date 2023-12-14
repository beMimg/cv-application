export default function TitleAndDescriptiption({ desc, person }) {
  return (
    <div className="info-row">
      <p className="info-title">{desc}: </p>
      <p className="info-description">{person}</p>
    </div>
  );
}
