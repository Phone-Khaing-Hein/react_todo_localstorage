
export const List = ({ tasks }) => {
  // const taskList = useRef([]);

  // useEffect(() => {
  //   if (localStorage.getItem("tasks") != null) {
  //     taskList.current = JSON.parse(localStorage.getItem("tasks"));
  //   }
  // });

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
