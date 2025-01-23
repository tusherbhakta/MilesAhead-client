import { format } from "date-fns";
import { AiOutlineDollarCircle, AiOutlineCalendar } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const EventCardImg = ({ marathons }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center items-center">
            {marathons.map((marathon) => (
                <div
                    key={marathon._id}
                    className="relative group max-w-sm rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 bg-white dark:bg-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
                >
                    {/* Image Section */}
                    <div className="relative overflow-hidden">
                        <img
                            src={marathon.image}
                            alt={marathon.title}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Title Section */}
                    <div className="p-4 text-center bg-lime-200">
                        <h3 className="text-lg font-bold text-gray-500 truncate group-hover:text-gray-800 transition-colors duration-300">
                            {marathon.title}
                        </h3>
                    </div>

                    {/* Hover Details Section */}
                    <div className="absolute bottom-0 left-0 w-full bg-lime-200 text-gray-500 dark:text-gray-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-6">
                        <h3 className="text-xl font-bold mb-4 truncate">{marathon.title}</h3>
                        <p className="text-sm leading-relaxed mb-4">{marathon.description}</p>

                        <div className="space-y-3">
                            <p className="flex items-center gap-2 text-sm">
                                <FaMapMarkerAlt className="text-red-400 text-lg" />
                                <span>Location: {marathon.location}</span>
                            </p>
                            <p className="flex items-center gap-2 text-sm">
                                <AiOutlineCalendar className="text-blue-400 text-lg" />
                                <span>Start Date: {format(new Date(marathon.marathonStartDate), "MMMM dd, yyyy")}</span>
                            </p>
                            <p className="flex items-center gap-2 text-sm">
                                <BiCategory className="text-purple-400 text-lg" />
                                <span>Distance: {marathon.runningDistance}</span>
                            </p>
                            <p className="flex items-center gap-2 text-sm">
                                <AiOutlineDollarCircle className="text-green-400 text-lg" />
                                <span>Total Registrations: {marathon.totalRegistrationCount}</span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventCardImg;




