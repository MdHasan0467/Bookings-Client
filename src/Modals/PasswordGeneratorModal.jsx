import { useState } from "react";



function generatePassword(length, options) {
  const { uppercase, lowercase, numbers, specialChars } = options;
  let charset = '';
  if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (numbers) charset += '0123456789';
  if (specialChars) charset += '!@#$%^&*';

  if (charset.length === 0) {
    throw new Error('At least one option should be selected.');
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}





const PasswordGeneratorModal = () => {

    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(10);
    const [options, setOptions] = useState({
      uppercase: true,
      lowercase: true,
      numbers: true,
      specialChars: false,
    });
  
    const handleGeneratePassword = () => {
      try {
        const generatedPassword = generatePassword(length, options);
        setPassword(generatedPassword);
      } catch (error) {
        console.error(error);
        setError('At least one option should be selected!');
      }
    };
  
    const handleLengthChange = (event) => {
      const value = parseInt(event.target.value, 10);
      setLength(value);
    };
  
    const increaseLength = () => {
      setLength((prevLength) => prevLength + 1);
    };
  
    const decreaseLength = () => {
      if (length > 1) {
        setLength((prevLength) => prevLength - 1);
      }
    };
  
    const handleOptionChange = (event) => {
      const { name, checked } = event.target;
      setOptions((prevOptions) => ({ ...prevOptions, [name]: checked }));
    };
  
  
      
      return (
          <div>
            <input type="checkbox" id="generate-password" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
            <div className="flex justify-center mt-24">
            <div>
                <div>
                    <label className="text-2xl">Password Length : </label>
                    <button className="bg-red-500 px-3 text-white border border-red-500" onClick={decreaseLength}>
                    -
                    </button>
                    <input className="w-16 border border-green-200 px-2 bg-green-200" type="number" value={length} onChange={handleLengthChange} />
                    <button className="bg-green-500 px-3 text-white border border-green-500" onClick=   {increaseLength}>
                    +
                    </button>
                </div>



                <div>
                    <label>
                    <input
                        type="checkbox"
                        name="uppercase"
                        checked={options.uppercase}
                        onChange={handleOptionChange}
                    />
                    Include Uppercase Letters
                    </label>
                </div>



                <div>
                    <label>
                    <input
                        type="checkbox"
                        name="lowercase"
                        checked={options.lowercase}
                        onChange={handleOptionChange}
                    />
                    Include Lowercase Letters
                    </label>
                </div>
                


                <div>
                    <label>
                    <input
                        type="checkbox"
                        name="numbers"
                        checked={options.numbers}
                        onChange={handleOptionChange}
                    />
                    Include Numbers
                    </label>
                </div>
    
    
                <div>
                    <label>
                    <input
                        type="checkbox"
                        name="specialChars"
                        checked={options.specialChars}
                        onChange={handleOptionChange}
                    />
                    Include Special Characters
                    </label>
                </div>
                
            <p className="bg-green-500 px-3 cursor-pointer text-center text-white border border-green-500" onClick={handleGeneratePassword}>Generate Password</p>
    
    
                    {password &&
                    <p className="text-green-500"><span className="text-xl font-semibold text-green-300"></span> {password}</p>
                    } 
    
                    {
                    error &&
                    <p className="text-orange-500">{error}</p>
                    }
                </div>
            </div>
                    <div className="modal-action">
                    <label htmlFor="generate-password" className="btn">Close!</label>
                    </div>
                </div>
                </div>
                
            </div>
        );
};

export default PasswordGeneratorModal;