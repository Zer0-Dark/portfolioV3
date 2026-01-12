/* eslint-disable react/prop-types */

function PageTitle({ title }) {
    return (
        <h2 className="w-full text-center desktop:text-7xl text-5xl text-secondryTextColor font-semibold mt-10 mb-20 font-game">
            {title}
        </h2>
    );
}

export default PageTitle;
