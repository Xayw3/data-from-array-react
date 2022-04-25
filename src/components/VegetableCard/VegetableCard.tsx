import './vegetable-card.scss';

type VegetableCardProps = {
    bgColor: string,
    title: string,
    desc: string,
    className: string,
    id: string,
}

const VegetableCard = ({
  bgColor, title, desc, className, id,
}: VegetableCardProps) => (
  <div className={`card ${className}`} style={{ backgroundColor: bgColor }}>
    <div className="card-wrapper">
      <h2 className="card__title">
        {title}
      </h2>
      <span className="card__id">{id}</span>
    </div>
    <p className="card__desc">
      {desc}
    </p>
  </div>
);

export default VegetableCard;
