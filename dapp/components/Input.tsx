type Props = {
    label: string;
    value: string;
    placeholder?: string;
    type?: string;
    setValue: (value: string) => void;
  };
  
  const Input: React.FC<Props> = ({
    label,
    value,
    setValue,
    placeholder = '',
    type = 'text',
  }) => {
    return (
      <div>
        <label className="block">
          <span className="w-full text-emerald-400">{label}</span>
          <input
            className="mt-1 text-white block w-full bg-gray-900 rounded-md border-white shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </label>
      </div>
    );
  };
  
  export default Input;