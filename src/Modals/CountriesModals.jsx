import europe from "../../src/assets/flags/european.png";
import usa from "../../src/assets/flags/united-states.png";
import uae from "../../src/assets/flags/united-arab-emirates.png";
import britain from "../../src/assets/flags/united-kingdom.png";
import denmark from "../../src/assets/flags/denmark.png";
import china from "../../src/assets/flags/china.png";
import egypt from "../../src/assets/flags/egypt.png";
import hongkong from "../../src/assets/flags/hong-kong.png";
import india from "../../src/assets/flags/india.png";
import bangladesh from "../../src/assets/flags/bangladesh.png";
import afganistan from "../../src/assets/flags/afghanistan.png";
import australia from "../../src/assets/flags/australia.png";
import argentina from "../../src/assets/flags/argentina.png";
import bhutan from "../../src/assets/flags/bhutan.png";
import brazil from "../../src/assets/flags/brazil-flag.png";
import canada from "../../src/assets/flags/canada.png";
import germany from "../../src/assets/flags/germany.png";
import Greece from "../../src/assets/flags/greece.png";
import nepal from "../../src/assets/flags/nepal.png";
import Malaysia from "../../src/assets/flags/malaysia.png";
import jordan from "../../src/assets/flags/jordan.png";
import lebanon from "../../src/assets/flags/lebanon.png";
import italy from "../../src/assets/flags/italy.png";
import japan from "../../src/assets/flags/japan.png";
import iran from "../../src/assets/flags/iran.png";
import maldives from "../../src/assets/flags/maldives.png";
import indonesia from "../../src/assets/flags/indonesia.png";

const CountriesModals = () => {
  return (
    <div>
      <dialog id="countriesModals" className="modal overflow-y-auto h-auto">
        <form
          method="dialog"
          className="bg-white  space-y-10 w-2/3 p-10  mx-auto"
        >
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Select your country</h1>
            <button className="btn  btn-md btn-circle btn-ghost ">✕</button>
          </div>
          <div>
            <div className="grid  gap-10 grid-cols-4">
              <div
                title="Europe"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={europe} />
                </div>
                <h1 className="text-xl ">Europe</h1>
              </div>
              <div
                title="USA"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={usa} />
                </div>
                <h1 className="text-xl ">United States</h1>
              </div>
              <div
                title="UAE"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={uae} />
                </div>
                <h1 className="text-xl ">UAE</h1>
              </div>
              <div
                title="United Kingdom"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={britain} />
                </div>
                <h1 className="text-xl ">United Kingdom</h1>
              </div>
              <div
                title="Europe"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={denmark} />
                </div>
                <h1 className="text-xl ">Denmark</h1>
              </div>
              <div
                title="Europe"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={india} />
                </div>
                <h1 className="text-xl ">India</h1>
              </div>
              <div
                title="Europe"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={hongkong} />
                </div>
                <h1 className="text-xl ">Hong Kong</h1>
              </div>
              <div
                title="Europe"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={china} />
                </div>
                <h1 className="text-xl ">China</h1>
              </div>
              <div
                title="Europe"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={egypt} />
                </div>
                <h1 className="text-xl ">Egypt</h1>
              </div>
              <div
                title="Maldives"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={maldives} />
                </div>
                <h1 className="text-xl ">Maldives</h1>
              </div>
              <div
                title="Indonesia"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={indonesia} />
                </div>
                <h1 className="text-xl ">Indonesia</h1>
              </div>
              <div
                title="Bangladesh"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={bangladesh} />
                </div>
                <h1 className="text-xl ">Bangladesh</h1>
              </div>
              <div
                title="Bhutan"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={bhutan} />
                </div>
                <h1 className="text-xl ">Bhutan</h1>
              </div>
              <div
                title="Argentina"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={argentina} />
                </div>
                <h1 className="text-xl ">Argentina</h1>
              </div>
              <div
                title="Australia"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={australia} />
                </div>
                <h1 className="text-xl ">Australia</h1>
              </div>
              <div
                title="Germany"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={germany} />
                </div>
                <h1 className="text-xl ">Germany</h1>
              </div>
              <div
                title="Afganistan"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={afganistan} />
                </div>
                <h1 className="text-xl ">Afganistan</h1>
              </div>

              <div
                title="Canada"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={canada} />
                </div>
                <h1 className="text-xl ">Canada</h1>
              </div>
              <div
                title="Greece"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={Greece} />
                </div>
                <h1 className="text-xl ">Greece</h1>
              </div>
              <div
                title="Brazil"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={brazil} />
                </div>
                <h1 className="text-xl ">Brazil</h1>
              </div>
              <div
                title="Iran"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={iran} />
                </div>
                <h1 className="text-xl ">Iran</h1>
              </div>
              <div
                title="Nepal"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={nepal} />
                </div>
                <h1 className="text-xl ">Nepal</h1>
              </div>
              <div
                title="Lebanon"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={lebanon} />
                </div>
                <h1 className="text-xl ">Lebanon</h1>
              </div>
              <div
                title="Jordan"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={jordan} />
                </div>
                <h1 className="text-xl ">Jordan</h1>
              </div>
              <div
                title="Malaysia"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={Malaysia} />
                </div>
                <h1 className="text-xl ">Malaysia</h1>
              </div>
              <div
                title="Italy"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={italy} />
                </div>
                <h1 className="text-xl ">Italy</h1>
              </div>
              <div
                title="Japan"
                className="gap-5 items-center flex flex-col hover:bg-gray-200  p-3"
              >
                <div className="avatar rounded-full w-1/3">
                  <img src={japan} />
                </div>
                <h1 className="text-xl ">Japan</h1>
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default CountriesModals;
