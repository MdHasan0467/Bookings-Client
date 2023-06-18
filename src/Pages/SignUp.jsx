import { Link } from "react-router-dom";
import PasswordGeneratorModal from "../Modals/PasswordGeneratorModal";


const SignUp = () => {
    return (
        <div>
           <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form className="container flex flex-col mx-auto space-y-12">
		<div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">

			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>

			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<p className="text-sm">First name</p>
					<input id="firstname" name="firstName" type="text" placeholder="First name" className="w-96 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 border" />
				</div>

				<div className="col-span-full sm:col-span-3">
					<p className="text-sm">Last name</p>
					<input id="lastname" name="lastName" type="text" placeholder="Last name" className="w-96 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 border" />
				</div>

				
                
				<div className="col-span-full sm:col-span-3">
					<p className="text-sm">Email</p>
					<input id="email" name="email" type="email" placeholder="Email" className="w-96 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 border" />
				</div>

				<div className="col-span-full sm:col-span-3">
					<p className="text-sm">Password</p>
					<input id="password" name="password" type="password" placeholder="Password" className="w-96 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 border" />
				</div>

				
				<div className="col-span-full sm:col-span-3">
					<p className="text-sm">Address</p>
					<input id="address" name="address" type="address" placeholder="Address" className="w-96 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 border" />
				</div>

				{/* The button to open modal */}
                <label htmlFor="generate-password" className="btn w-52">Generate Password</label>
                {/* Put this part before </body> tag */}
                <PasswordGeneratorModal  />

                
			</div>
		</div>

		<div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">

			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>

			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full">
                <div className="w-96 space-y-1 dark:text-gray-100">
                    <p className="block text-sm font-medium">Attachments</p>
                    <div className="flex">
                        <input type="file" name="files" id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                    </div>
                </div>
				</div>
			</div>
            <p className="text-sm text-gray-500">
                    Already have an account?
                    <Link to='/authentication/sign-in' className="hover:underline">Sign In</Link>
                </p>
		</div>
	</form>
</section>
        </div>
    );
};

export default SignUp;