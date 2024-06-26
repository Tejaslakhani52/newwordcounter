import toast from "react-hot-toast";
import Tooltip from "../components/Tooltip";

const fontSize = ["14px", "17px", "22px"];

const fontFamily = [
  "Montserrat",
  "'Inconsolata', monospace",
  "'Inter', sans-serif",
];

const caseTypeData = [
  { name: "Sentence case", value: "Sentence case" },
  { name: "lower case", value: "lowercase" },
  { name: "UPPER CASE", value: "uppercase" },
  { name: "Capitalized Case", value: "capitalize" },
];

export default function ActionBox({
  caseType,
  setCaseType,
  setText,
  activeFontSize,
  setActiveFontSize,
  activeFontFamily,
  setActiveFontFamily,
  grammerCheck,
  setGrammerCheck,
  autoSave,
  setAutoSave,
}) {
  return (
    <div
      className="xl:absolute w-[fit-content] xl:w-[50px] bg-white left-[-85px] gap-[15px] xl:gap-[10px] flex xl:flex-col items-center px-[15px] xl:px-[0] py-[10px] xl:py-[15px] rounded-[4px] shadow-lg  mb-5 xl:mb-0"
      style={{ border: "1px solid rgb(226 232 240)" }}
    >
      {/* <Tooltip
        button={
          <div
            className="opacity-70 relative"
            onClick={() => {
              setAutoSave(!autoSave);
              toast.success(
                autoSave ? "Autosave desabled " : "Autosave enabled"
              );
            }}
          >
            <i className="fa-regular fa-floppy-disk text-[22px]"></i>
            {autoSave ? (
              <i className="fa-solid fa-check text-[7px] text-white absolute p-[2px] rounded-[50%] bg-[#005FE4] bottom-[1px] right-[-3px]"></i>
            ) : (
              <i className="fa-solid fa-xmark text-[7px] text-white absolute p-[2px] rounded-[50%] bg-slate-400	 bottom-[1px] right-[-3px]"></i>
            )}
          </div>
        }
      >
        <p className="opacity-70">
          Autosave is
          <span className="text-[17px] font-bold">
            {autoSave ? " ON" : " OFF"}
          </span>
        </p>
      </Tooltip>

      <div className="divider" /> */}
      {/* 
      <Tooltip
        button={
          <div
            className="opacity-70 relative"
            onClick={() => {
              setGrammerCheck(!grammerCheck);
              toast.success(
                grammerCheck
                  ? "Grammer checking desabled "
                  : "Grammer checking enabled"
              );
            }}
          >
            <i className="fa-solid fa-spell-check text-[22px]"></i>
            {grammerCheck ? (
              <i className="fa-solid fa-check text-[7px] text-white absolute p-[2px] rounded-[50%] bg-[#005FE4] bottom-[1px] right-[-3px]"></i>
            ) : (
              <i className="fa-solid fa-xmark text-[7px] text-white absolute p-[2px] rounded-[50%] bg-slate-400	 bottom-[1px] right-[-3px]"></i>
            )}
          </div>
        }
      >
        <p className="opacity-70">
          Grammar check is
          <span className="text-[17px] font-bold">
            {grammerCheck ? " ON" : " OFF"}
          </span>
        </p>
      </Tooltip>
      <div className="divider" /> */}

      <Tooltip
        button={
          <div
            className="opacity-70 relative"
            onClick={() => {
              setText("");
              toast.success("Editor cleard");
              localStorage.setItem("text", "");
            }}
          >
            <i className="fa-solid fa-arrows-spin text-[22px]"></i>
          </div>
        }
      >
        <p className="opacity-70">Clear Text</p>
      </Tooltip>
      <div className="divider" />

      <Tooltip
        button={
          <div className=" relative font-bold opacity-70">
            <span className="text-[18px]">T</span>
            <span className="text-[10px]">T</span>
          </div>
        }
      >
        <div className="flex gap-[10px] opacity-70">
          {fontSize?.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveFontSize(item);
                toast.success("Font size updated");
                localStorage.setItem("activeFontSize", item);
              }}
              style={{
                fontSize: item,
                fontWeight: "800",
                padding: "0 10px",
                backgroundColor: item === activeFontSize ? "#f6f8fa" : "",
                border:
                  item === activeFontSize ? "1px solid rgb(226 232 240)" : "",
                borderRadius: "4px",
              }}
            >
              T
            </button>
          ))}
        </div>
      </Tooltip>
      <div className="divider" />

      <Tooltip
        button={
          <div className=" relative font-bold opacity-70">
            <span className="text-[18px]">A</span>
            <span className="text-[10px]">a</span>
          </div>
        }
      >
        {fontFamily?.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveFontFamily(item);
              toast.success("Typeface updated");
              localStorage.setItem("activeFontFamily", item);
            }}
            style={{
              fontSize: item,
              fontWeight: "800",
              padding: "0 10px",
              backgroundColor: item === activeFontFamily ? "#f6f8fa" : "",
              border:
                item === activeFontFamily ? "1px solid rgb(226 232 240)" : "",
              borderRadius: "4px",
              opacity: "0.7",
              fontFamily: item,
            }}
          >
            <span className="text-[18px]">A</span>
            <span className="text-[10px]">a</span>
          </button>
        ))}
      </Tooltip>
      <div className="divider" />
      <Tooltip
        button={
          <div className=" relative font-bold opacity-70">
            <span className="text-[13px]">Case</span>
          </div>
        }
      >
        <div className="flex max-md:flex-col gap-3">
          {caseTypeData?.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCaseType(item?.value);
                toast.success("Case updated");
                // localStorage.setItem("activeCaseType", item?.value);
              }}
              style={{
                fontSize: "15px",
                fontWeight: "800",
                padding: "0 10px",
                backgroundColor: item?.value === caseType ? "#f6f8fa" : "",
                border:
                  item?.value === caseType ? "1px solid rgb(226 232 240)" : "",
                borderRadius: "4px",
                opacity: "0.7",
                textAlign: "left",
              }}
            >
              {item?.name}
            </button>
          ))}
        </div>
      </Tooltip>
    </div>
  );
}
