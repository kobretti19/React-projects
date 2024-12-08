export function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={`overflow-y-auto p-4 fixed right-0 z-50 top-0 h-full shadow-lg w-full md:w-[60%] lg:w-[35%] bg-white transition duration-500 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-6 text-black font-bold"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20  h-full w-full bg-black opacity-50" />
      )}
    </div>
  );
}
