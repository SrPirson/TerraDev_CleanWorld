import Happy from '../assets/thx.jpg'

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-[#AFBF75]">

      <div className="bg-white border-2 border-gray-300 rounded-xl shadow-lg p-8 md:p-10 w-11/12 max-w-4xl 
                      grid grid-cols-1 md:grid-cols-[0.35fr_0.65fr] gap-8 md:gap-12 relative">

        {/* Línea divisoria central (más corta y suave) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-24 h-40 w-[1px] bg-gray-300/30"></div>

        {/* COLUMNA IZQUIERDA — Formulario */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-800">Register</h1>

          <form className="flex flex-col gap-5 md:gap-6">
            
            {/* Username */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="peer bg-gray-100 border border-gray-300 rounded px-4 pt-5 pb-2 w-full 
                           focus:outline-none focus:ring-2 focus:ring-[#AFBF75]"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-gray-700 peer-focus:text-sm">
                Username
              </label>
            </div>

            {/* Email */}
            <div className="relative w-full">
              <input
                type="email"
                placeholder=" "
                className="peer bg-gray-100 border border-gray-300 rounded px-4 pt-5 pb-2 w-full 
                           focus:outline-none focus:ring-2 focus:ring-[#AFBF75]"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-gray-700 peer-focus:text-sm">
                Email
              </label>
            </div>

            {/* Password */}
            <div className="relative w-full">
              <input
                type="password"
                placeholder=" "
                className="peer bg-gray-100 border border-gray-300 rounded px-4 pt-5 pb-2 w-full 
                           focus:outline-none focus:ring-2 focus:ring-[#AFBF75]"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-gray-700 peer-focus:text-sm">
                Password
              </label>
            </div>

            {/* Confirm Password */}
            <div className="relative w-full">
              <input
                type="password"
                placeholder=" "
                className="peer bg-gray-100 border border-gray-300 rounded px-4 pt-5 pb-2 w-full 
                           focus:outline-none focus:ring-2 focus:ring-[#AFBF75]"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-gray-700 peer-focus:text-sm">
                Confirm Password
              </label>
            </div>

            {/* Botones */}
            <div className="flex flex-col gap-3 md:gap-4">
              <button
                type="submit"
                className="bg-[#5F7336] text-white font-semibold py-3 rounded hover:bg-[#324016] transition duration-300"
              >
                Register
              </button>

              <button
                type="button"
                className="bg-gray-200 text-gray-800 font-semibold py-3 rounded hover:bg-gray-300 transition duration-300"
              >
                Already have an account?
              </button>
            </div>

          </form>
        </div>

        {/* COLUMNA DERECHA — Imagen */}
        <div className="flex items-center justify-center p-0">
          <div className="relative w-full h-64 md:h-full flex justify-center items-center">
            <img 
              src={Happy}
              className="rounded-lg object-contain w-full h-full"
            />
          </div>
        </div>

      </div>

    </div>
  );
}
