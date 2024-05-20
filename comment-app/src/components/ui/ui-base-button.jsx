/**
 * @param {{
 * children: any,
 * className: string,
 * onClick: any,
 * disabled: boolean,
 * }} props
 */

function UiBaseButton({ children, className, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg text-white bg-blue-700 hover:bg-opacity-75 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default UiBaseButton;
