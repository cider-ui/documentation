export default function ComponentsWrapper({ children }) {
  return (
    <div className="p-2 flex items-center gap-2 flex-wrap border-gray-300 border-[1px] rounded-lg">
      {children}
    </div>
  );
};
