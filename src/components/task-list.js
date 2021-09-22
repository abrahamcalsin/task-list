function TaskList(props) {
  return (
    <section className="px-3 my-4 h-20 relative overflow-y-auto container-scrollbar sm:px-5 sm:h-30">
      <div>{props.children}</div>
    </section>
  );
}

export { TaskList };
