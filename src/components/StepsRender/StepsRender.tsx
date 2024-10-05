import { IStepsRender } from "../../models";

export const StepsRender: React.FC<IStepsRender> = ({ steps, onDelete, onEdit }) => {
  const formatDate = (date: string): string => {
    const parts = date.split('-');
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
  };

  return (
    <>
      <div className={`result ${steps.length > 0 ? 'result--bordered' : ''}`}>
        {steps.length > 0 && (
          <div className="table">
            <div className="date__title">Дата (ДД.ММ.ГГ)</div>
            <div className="distance__title">Пройдено км</div>
            <div className="actions__title">Действия</div>
          </div>
        )}
  
        {steps.map((step) => (
          <div className="table-row" key={step.date}>
            <div className="date__result">{formatDate(step.date)}</div>
            <div className="distance__result">{step.distance}</div>
            <div className="btns">
              <button className="edit__btn" onClick={() => onEdit(step.date)}>✎</button>
              <button className="delete__btn" onClick={() => onDelete(step.date)}>✘</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
