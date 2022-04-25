import './task.scss';

type TaskProps = {
    desc: string,
    className: string,
};

const Task = ({ desc, className }: TaskProps) => (
  <div className="task">
    <p className={className}>
      {desc}
    </p>
  </div>
);

export default Task;
