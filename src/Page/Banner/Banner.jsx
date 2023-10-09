const Banner = () => {
    const bannerStyle = {
        backgroundImage: 'url("https://i.ibb.co/86Q6Y7P/top-wedding-planners-in-viet-nam-1.jpg")',
    };

    return (
        <div className="h-96 w-full bg-blue-100" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <div
                className="h-full w-full bg-cover bg-no-repeat bg-center"
                style={bannerStyle}>
            </div>
        </div>

    );
};

export default Banner;
