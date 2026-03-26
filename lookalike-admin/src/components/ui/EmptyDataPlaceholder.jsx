const EmptyDataPlaceholder = ({ message }) => {
  return (
    <section className="w-full relative">
      <div className="w-full min-h-screen px-4 flex items-center justify-center gap-3 flex-wrap">
        <p className="text-(--secondary-text) text-base">{message}</p>
      </div>
    </section>
  );
};

export default EmptyDataPlaceholder;
