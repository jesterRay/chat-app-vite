
interface AlertDetail {
  show: boolean;
  type: string;
  msg: string;
}

function determineTextColor(type:string): string{
    if(type === "error") return "red";
    else if(type === "success") return "green";
    else return "black"
}

const Alert = ({alert,setAlert}: {alert: AlertDetail;setAlert: React.Dispatch<React.SetStateAction<AlertDetail>>;}) => {
  
    if(!alert.show) return null;

    const closeAlert = () => {
    setAlert((pre) => ({
      ...pre,
      show: false,
    }));
  };

  const textColor = determineTextColor(alert.type);

  return (
    <div className={`  alert absolute min-w-[15rem] bg-slate-200 rounded-sm px-6 py-4 text-${textColor}-700 border-l-8  border-${textColor}-700  `}>
      <div className="flex justify-between gap-6 relative items-start">
        <span className="text-sm">{alert.msg}</span>
        <button onClick={closeAlert} className="absolute top-[-75%] right-[-8%]">
            <i className="fa-solid fa-xmark text-dark text-sm"></i>
        </button>
      </div>
    </div>
  );
};

export default Alert;
export type { AlertDetail };
