import './vegetable-list-first.scss';
import VegetableCard from '../VegetableCard/VegetableCard';

type VegetableListProps = {
    bgColor: string,
    title: string,
    desc: string,
    id: string,
}

const VegetablieListFirst = ({
  bgColor, title, desc, id,
}: VegetableListProps) => (
  <div className="vegetable-list">
    <VegetableCard className="vegetable-list__card" id={id} bgColor={bgColor} title={title} desc={desc} />
  </div>
);

export default VegetablieListFirst;
