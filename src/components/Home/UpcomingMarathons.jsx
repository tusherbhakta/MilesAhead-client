import EventCardImg from "../EventCard/EventCardImg";
import SectionTitle from "../shared/SectionTitle";
import springcity from "../../assets/springcity.jpg";
import riverfront from "../../assets/riverfront.jpg";
import mountain from "../../assets/mountaintrail.jpeg";
import coastal from "../../assets/coastal.jpg";
import desert from "../../assets/desert.jpg";
import citylights from "../../assets/citylights.jpg";

const UpcomingMarathons = () => {
    const marathons = [
        {
            _id: "1",
            image: springcity,
            title: "Blossom Run",
            description: "Enjoy the vibrant spring blossoms as you run.",
            location: "Bloomfield, CA",
            marathonStartDate: "2025-03-15T00:00:00.000Z",
            startRegistrationDate: "2025-01-01T00:00:00.000Z",
            endRegistrationDate: "2025-03-01T00:00:00.000Z",
            runningDistance: "12km",
            totalRegistrationCount: 180,
        },
        {
            _id: "2",
            image: riverfront,
            title: "Sunrise River Dash",
            description: "Dash along the riverbanks during sunrise.",
            location: "Riverbend, NY",
            marathonStartDate: "2025-04-10T00:00:00.000Z",
            startRegistrationDate: "2025-02-01T00:00:00.000Z",
            endRegistrationDate: "2025-04-01T00:00:00.000Z",
            runningDistance: "8km",
            totalRegistrationCount: 220,
        },
        {
            _id: "3",
            image: mountain,
            title: "Peak Pursuit",
            description: "Reach new heights on the thrilling mountain trails.",
            location: "Summit Valley, CO",
            marathonStartDate: "2025-05-05T00:00:00.000Z",
            startRegistrationDate: "2025-03-01T00:00:00.000Z",
            endRegistrationDate: "2025-04-20T00:00:00.000Z",
            runningDistance: "18km",
            totalRegistrationCount: 200,
        },
        {
            _id: "4",
            image: coastal,
            title: "Oceanfront Breeze Run",
            description: "Breathe in the fresh ocean air as you run along the coast.",
            location: "Laguna Beach, CA",
            marathonStartDate: "2025-06-12T00:00:00.000Z",
            startRegistrationDate: "2025-04-01T00:00:00.000Z",
            endRegistrationDate: "2025-06-01T00:00:00.000Z",
            runningDistance: "22km",
            totalRegistrationCount: 250,
        },
        {
            _id: "5",
            image: desert,
            title: "Sahara Sprint",
            description: "Test your endurance in the golden sands of the desert.",
            location: "Sahara Plains, AZ",
            marathonStartDate: "2025-07-20T00:00:00.000Z",
            startRegistrationDate: "2025-05-01T00:00:00.000Z",
            endRegistrationDate: "2025-07-01T00:00:00.000Z",
            runningDistance: "28km",
            totalRegistrationCount: 280,
        },
        {
            _id: "6",
            image: citylights,
            title: "Urban Glow Run",
            description: "Experience the city's dazzling lights on this nighttime run.",
            location: "Metropolis, NY",
            marathonStartDate: "2025-08-15T00:00:00.000Z",
            startRegistrationDate: "2025-06-01T00:00:00.000Z",
            endRegistrationDate: "2025-08-01T00:00:00.000Z",
            runningDistance: "15km",
            totalRegistrationCount: 300,
        },
    ];
    

    return (
        <section className="bg-lime-50 dark:bg-gray-900 ">
            <div className="pt-10 md:pt-16 max-w-7xl mx-auto px-4" >
            <SectionTitle title="Upcoming Marathons" subtitle="Join Our Upcoming Marathon Events" />
            <EventCardImg marathons={marathons} />
            </div>
        </section>
    );
};

export default UpcomingMarathons;
