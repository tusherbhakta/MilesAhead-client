import PropTypes from 'prop-types';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center dark:text-white text-gray-800">
              {title}
            </h2>
            <p className="text-center mt-2 text-lg dark:text-gray-300 text-gray-700">
                {subtitle}
            </p>
        </div>
    )
}
SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

export default SectionTitle;

