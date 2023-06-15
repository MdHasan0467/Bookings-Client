const CurrencyModals = () => {
  return (
    <div>
      <dialog id="currencyModals" className="modal overflow-y-auto h-auto">
        <form
          method="dialog"
          className="bg-white  space-y-10 w-2/3 p-10  mx-auto"
        >
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Select your currency</h1>
            <button className="btn  btn-md btn-circle btn-ghost ">✕</button>
          </div>
          <div>
            <div className="grid font-normal gap-10 grid-cols-4">
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Euro</h1> Eur
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">US Dollar</h1> USD
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Australia Dollar</h1> AUD
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Japan Yen</h1> JPY
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Great Britain Pound</h1> GBP
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Switzerland Franc</h1> CHF
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Afghanistan Afghani</h1> AFN
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Bangladeshi Taka</h1> BDT
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Argentina Peso</h1> ARS
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Bhutan Ngultrum</h1> BTN
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Brazil Real</h1> BRL
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Canada Dollar</h1> CAD
              </div>

              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">China Yuan</h1> CNY
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Denmark Krone</h1> DKK
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Maldivian Rufiyaa</h1> MVR
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Indonesian rupiah</h1> IDR
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Egypt Pound</h1> EGP
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Germany Mark</h1> DMK (EURO)
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Greece Drachma</h1> GRD (EURO)
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">India Rupee</h1> INR
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Hong Kong Dollar</h1> HKD
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Iran Rial</h1> IRR
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Italy Lira</h1> ITL (EURO)
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Malaysia Ringgit</h1> MYR
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Nepal Rupee</h1> NPR
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Jordan Dinar</h1> JOD
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">Lebanon Pound</h1> LBP
              </div>
              <div className=" hover:bg-gray-200 p-3">
                <h1 className="font-bold">UAE Dirham</h1> AED
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default CurrencyModals;
