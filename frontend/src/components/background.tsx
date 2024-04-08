export function AnimatedBackground() {
    return (
        <div className="relative h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">

            <div className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-no-repeat animate-left-image"></div>

            <div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-no-repeat animate-right-image"></div>

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-cover bg-no-repeat animate-top-image"></div>
            </div>
        </div>
    );
}