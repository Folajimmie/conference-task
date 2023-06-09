const buttonBaseClassName =
  'h-[48px] text-button rounded-[8px] hover:opacity-90 disabled:cursor-not-allowed';

export const DefaultButton = ({ children, className, onClick, ...rest }) => {
  return (
    <button
      className={`${buttonBaseClassName} text-button-1 ${className}`}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  );
}