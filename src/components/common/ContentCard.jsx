const ContentCard = ({ content, title }) => {

  return (
    <div className="content-card">
      <div className="content-card-title">{title}</div>
      <div className="content-card-body">{content}</div>
    </div>
  );
};

export default ContentCard;