import { IoIosArrowDown } from "react-icons/io";

export function Select({ options, title }) {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className="w-24 appearance-none border-gray-400 p-4"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0 ">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
