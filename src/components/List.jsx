export const List = ({ tasks }) => {
  return (
    <div className="list-group">
      {tasks.map((t, index) => (
        <button
          type="button"
          className="list-group-item list-group-item-action"
          key={index}
        >
          {t}
        </button>
      ))}
    </div>
  );
};
