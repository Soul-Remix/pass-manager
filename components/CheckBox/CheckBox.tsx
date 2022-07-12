interface IProps {
  id: string;
  label: string;
  value: boolean;
  onChange: () => void;
}

const CheckBox = ({ id, label, value, onChange }: IProps) => {
  return (
    <div>
      <input type="checkbox" id={id} checked={value} onChange={onChange} />
      <label htmlFor={id} className="ml-2">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
