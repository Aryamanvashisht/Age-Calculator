import { useState ,useRef} from "react";

const Dateofbirth = () => {
  const [birthdateinput, setBirthDateinput] = useState<string | null>(null);
  const [Age, setAge] = useState<number | null>(null);
  const inputref = useRef<HTMLInputElement>(null);

  console.log(Age);

  function CalculateAge() {
    const currdate = new Date();
    const curryear = currdate.getFullYear();
    const currmonth = currdate.getMonth();
    const currday = currdate.getDate();

    if (birthdateinput) {
      const birthdate = new Date(birthdateinput);
      const birthyear = birthdate.getFullYear();
      const birthmonth = birthdate.getMonth();
      const birthday = birthdate.getDate();
      let age = curryear - birthyear;
      if (age === 0) {
        setAge(0)
        return;
      }

      if (
        currmonth < birthmonth ||
        (currmonth == birthmonth && currday < birthday)
      ) {
        age--;
      }
      return age;
    }
  }

  function handleclick() {
    let age = CalculateAge();
    age && setAge(age);
  }

  function handleReset() {
    setAge(null);
    setBirthDateinput(null);
    if(inputref.current) inputref.current.value = ""
  }

  return (
    <div className="flex flex-col sm:flex sm:flex-row">
      <div className="sm:w-[40%] sm:ml-[8%] sm:mt-5">
        <h1 className="text-2xl text-center justify-center mt-5 sm:text-left sm:pl-3 sm:font-bold">
          Date of Birth
        </h1>
        <div className="ml-[29%] sm:ml-3 sm:mt-5">
          <input
            ref={inputref}
            type="date"
            className="border border-black mt-2 w-[60%] sm:h-12 sm:w-[90%]"
            onChange={(e) => setBirthDateinput(e.target.value)}
          />
        </div>
        <div className="sm:flex sm:flex-row sm:mt-5">
          <button
            className="w-fit ml-[32%] mt-3 rounded-xl px-2 py-1 bg-blue-500 text-white sm:ml-3 sm:rounded-md sm:w-32 sm:px-3 sm:py-2"
            onClick={handleclick}
          >
            Calculate Age
          </button>
          <button
            className="w-fit ml-[40%] mt-3 rounded-xl px-2 py-1 bg-blue-500 text-white sm:ml-1 sm:rounded-md sm:w-32"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      {/* show component */}
      <div className="bg-gray-200 rounded-b-xl mt-6 w-auto sm:ml-[10%] sm:px-32 sm:rounded-none sm:pb-32">
        <h1 className="text-center justify-center w-auto text-2xl pt-2 sm:font-bold sm:mt-5">
          Your Age is
        </h1>
        <h1 className="text-center justify-center w-auto text-2xl mt-2 pb-4 sm:mt-5">
          {Age}
        </h1>
      </div>
    </div>
  );
};

export default Dateofbirth;
