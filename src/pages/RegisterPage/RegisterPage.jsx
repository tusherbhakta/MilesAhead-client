import { signOut, sendEmailVerification, updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import auth from '../../firebase/firebase.init';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        photoUrl: '',
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    // const [verificationMessage, setVerificationMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);
        setErrorMessage('');
        // setVerificationMessage('');

        // Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter.
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        // Validate password
        if (!passwordRegex.test(formData.password)) {
            setErrorMessage(
                'Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter'
            );
            return;
        }

        // Create user using Auth Provider
        createUser(formData.email, formData.password)
            .then(userCredential => {

                // const user = userCredential.user;
                // send email verification address
                // sendEmailVerification(auth.currentUser)
                //     .then(() => {
                //         setVerificationMessage("Verification email sent");
                //     });
                // update user profile
                updateProfile(auth.currentUser, {
                    displayName: formData.username,
                    photoURL: formData.photoUrl
                }
                ).catch(error => {
                    toast.error('Error updating user profile:', error.code, error.message);
                }
                );
                // Explicitly log the user out after registration
                signOut(auth)
                    .catch(error => {
                        toast.error('Error logging out:', error.code, error.message);
                    });

                setSuccess(true);
                toast.success('User registered successfully!');
                setFormData({
                    username: '',
                    photoUrl: '',
                    email: '',
                    password: '',
                }); // Reset form data
                e.target.reset();
                navigate("/");
            }).catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
                setSuccess(false);
                toast.error('Error registering user!');
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center justify-center my-6">
        <Helmet>
          <title>MilesAhead | Register</title>
        </Helmet>
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:shadow-gray-900">
          <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-200">
            Create an Account
          </h2>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="name"
                required
                placeholder="Enter a username"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
              />
            </div>
      
            {/* Avatar */}
            <div>
              <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Avatar
              </label>
              <input
                type="text"
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleChange}
                autoComplete="photo"
                required
                placeholder="Enter a photo URL"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
              />
            </div>
      
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                placeholder="Enter a valid e-mail"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
              />
            </div>
      
            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter a strong password"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 top-6 flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
      
            <button
              type="submit"
              className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Register
            </button>
          </form>
      
          <p className="text-sm text-center text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")} className="text-blue-500 hover:underline">
              Log in
            </span>
          </p>
      
          {errorMessage && <p className="text-sm text-red-500 dark:text-red-400">{errorMessage}</p>}
          {success && <p className="text-sm text-green-500 dark:text-green-400">User registered successfully</p>}
        </div>
      </div>
      
    );
};

export default RegisterPage;